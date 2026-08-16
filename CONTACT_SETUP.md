# Contact form setup

The portfolio remains a static GitHub Pages site. A Cloudflare Worker verifies
Turnstile tokens and email ownership before forwarding a message through Resend.

## Required free services

1. Create a Cloudflare account, a Turnstile widget for `gmnunez.com.ar`, and a Workers KV namespace.
2. In Resend, verify the sending subdomain `mail.gmnunez.com.ar` using the DNS records Resend provides.
3. In `worker/`, replace the KV id and public Worker URL in `wrangler.toml`.
4. Store secrets without committing them:

   ```sh
   npx wrangler secret put TURNSTILE_SECRET
   npx wrangler secret put RESEND_API_KEY
   ```

5. Deploy from `worker/` with `npx wrangler deploy`.
6. Replace `CONTACT_API_URL` in `public/js/contact.js` with the deployed URL.
7. The production Turnstile sitekey for `gmnunez.com.ar` is already configured in `index.html`.

## Security behavior

- Turnstile is validated server-side and restricted to the production hostname.
- A honeypot silently accepts obvious bot submissions.
- Each IP can request up to five verification emails per hour.
- Pending messages expire after 15 minutes and links can only be used once.
- The message is forwarded only after the sender confirms control of the email.
- Resend and Turnstile secrets exist only as Worker secrets.
