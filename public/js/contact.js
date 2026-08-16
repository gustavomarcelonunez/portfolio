const CONTACT_API_URL = 'https://portfolio-contact.gnunez-f56.workers.dev/api/contact';

const contactMessages = {
  es: { required: 'Completá correctamente todos los campos.', captcha: 'Completá la verificación anti-spam.', sending: 'Enviando correo de verificación…', sent: 'Revisá tu correo y confirmá el enlace para enviar el mensaje.', error: 'No pudimos procesar el mensaje. Intentá nuevamente más tarde.' },
  en: { required: 'Please complete all fields correctly.', captcha: 'Please complete the anti-spam verification.', sending: 'Sending verification email…', sent: 'Check your inbox and confirm the link to send your message.', error: 'We could not process your message. Please try again later.' },
  it: { required: 'Completa correttamente tutti i campi.', captcha: 'Completa la verifica antispam.', sending: 'Invio dell’email di verifica…', sent: 'Controlla la posta e conferma il link per inviare il messaggio.', error: 'Non è stato possibile elaborare il messaggio. Riprova più tardi.' }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const button = document.getElementById('send-button');
  const status = document.getElementById('contact-status');
  if (!form || !button || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const lang = localStorage.getItem('lang') || 'es';
    const text = contactMessages[lang] || contactMessages.es;
    if (!form.checkValidity()) {
      form.reportValidity();
      return setStatus(status, text.required, true);
    }

    const formData = new FormData(form);
    const turnstileToken = formData.get('cf-turnstile-response');
    if (!turnstileToken) return setStatus(status, text.captcha, true);

    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    setStatus(status, text.sending, false);
    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'), email: formData.get('email'),
          message: formData.get('message'), website: formData.get('company_website'),
          turnstileToken, language: lang
        })
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      window.turnstile?.reset();
      setStatus(status, text.sent, false);
    } catch (_) {
      window.turnstile?.reset();
      setStatus(status, text.error, true);
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  });
});

function setStatus(element, message, isError) {
  element.textContent = message;
  element.classList.toggle('contact-status-error', isError);
}
