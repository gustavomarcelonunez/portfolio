const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TOKEN_TTL_SECONDS = 15 * 60;
const RATE_TTL_SECONDS = 60 * 60;
const RATE_LIMIT = 5;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return corsResponse(null, 204, env);
    if (request.method === 'POST' && url.pathname === '/api/contact') return createVerification(request, env);
    if (request.method === 'GET' && url.pathname === '/api/verify') return verifyAndDeliver(url, env);
    return new Response('Not found', { status: 404 });
  }
};

async function createVerification(request, env) {
  if (request.headers.get('Origin') !== env.ALLOWED_ORIGIN) return corsResponse({ error: 'Forbidden' }, 403, env);
  let body;
  try { body = await request.json(); } catch { return corsResponse({ error: 'Invalid request' }, 400, env); }
  if (body.website) return corsResponse({ ok: true }, 202, env);

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const message = clean(body.message, 4000);
  const language = ['es', 'en', 'it'].includes(body.language) ? body.language : 'es';
  if (name.length < 2 || !isEmail(email) || message.length < 10) return corsResponse({ error: 'Invalid fields' }, 400, env);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (!(await permitRequest(env, ip))) return corsResponse({ error: 'Too many requests' }, 429, env);

  const turnstile = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: body.turnstileToken, remoteip: ip })
  }).then((response) => response.json());
  if (!turnstile.success || turnstile.hostname !== new URL(env.ALLOWED_ORIGIN).hostname) {
    return corsResponse({ error: 'Verification failed' }, 400, env);
  }

  const token = crypto.randomUUID() + crypto.randomUUID();
  await env.CONTACT_TOKENS.put(`token:${token}`, JSON.stringify({ name, email, message, language }), { expirationTtl: TOKEN_TTL_SECONDS });
  const verifyUrl = `${env.PUBLIC_WORKER_URL}/api/verify?token=${encodeURIComponent(token)}`;
  const copy = verificationCopy(language);
  await sendEmail(env, { to: email, subject: copy.subject, html: copy.html(name, verifyUrl) });
  return corsResponse({ ok: true }, 202, env);
}

async function verifyAndDeliver(url, env) {
  const token = url.searchParams.get('token') || '';
  if (!/^[a-f0-9-]{72}$/.test(token)) return resultPage('El enlace no es válido.', false);
  const key = `token:${token}`;
  const pending = await env.CONTACT_TOKENS.get(key, 'json');
  if (!pending) return resultPage('El enlace venció o ya fue utilizado.', false);

  await sendEmail(env, {
    to: env.CONTACT_RECIPIENT,
    subject: `[Portfolio] Mensaje verificado de ${pending.name}`,
    replyTo: pending.email,
    html: `<h2>Nuevo mensaje verificado</h2><p><strong>Nombre:</strong> ${escapeHtml(pending.name)}</p><p><strong>Email:</strong> ${escapeHtml(pending.email)}</p><hr><p>${escapeHtml(pending.message).replace(/\n/g, '<br>')}</p>`
  });
  await env.CONTACT_TOKENS.delete(key);
  return resultPage('Tu correo fue verificado y el mensaje fue enviado. Gracias.', true);
}

async function permitRequest(env, ip) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  const hash = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  const key = `rate:${hash}`;
  const count = Number(await env.CONTACT_TOKENS.get(key) || 0);
  if (count >= RATE_LIMIT) return false;
  await env.CONTACT_TOKENS.put(key, String(count + 1), { expirationTtl: RATE_TTL_SECONDS });
  return true;
}

async function sendEmail(env, { to, subject, html, replyTo }) {
  const payload = { from: env.MAIL_FROM, to: [to], subject, html };
  if (replyTo) payload.reply_to = replyTo;
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Email provider error: ${response.status}`);
}

function corsResponse(data, status, env) {
  return new Response(data === null ? null : JSON.stringify(data), { status, headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin'
  }});
}

function resultPage(message, success) {
  return new Response(`<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Contacto</title><body style="margin:0;background:#0d0b0b;color:#f2f2f2;font:16px Inter,Arial,sans-serif;display:grid;place-items:center;min-height:100vh"><main style="max-width:520px;padding:32px;border:1px solid #333;border-radius:8px"><h1 style="color:${success ? '#00ce67' : '#ff7575'}">${success ? 'Mensaje confirmado' : 'No se pudo confirmar'}</h1><p>${message}</p><a style="color:#5fa0fe" href="https://gmnunez.com.ar">Volver al sitio</a></main></body></html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

function verificationCopy(language) {
  const copies = {
    es: { subject: 'Confirmá tu mensaje para Gustavo Nuñez', html: (name, url) => `<p>Hola ${escapeHtml(name)},</p><p>Confirmá tu dirección para entregar el mensaje:</p><p><a href="${url}">Confirmar y enviar</a></p><p>El enlace vence en 15 minutos.</p>` },
    en: { subject: 'Confirm your message to Gustavo Nuñez', html: (name, url) => `<p>Hello ${escapeHtml(name)},</p><p>Confirm your address to deliver the message:</p><p><a href="${url}">Confirm and send</a></p><p>The link expires in 15 minutes.</p>` },
    it: { subject: 'Conferma il messaggio per Gustavo Nuñez', html: (name, url) => `<p>Ciao ${escapeHtml(name)},</p><p>Conferma il tuo indirizzo per recapitare il messaggio:</p><p><a href="${url}">Conferma e invia</a></p><p>Il link scade tra 15 minuti.</p>` }
  };
  return copies[language] || copies.es;
}

function clean(value, max) { return String(value || '').trim().slice(0, max); }
function isEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char])); }
