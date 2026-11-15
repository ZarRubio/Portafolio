const required = ['VITE_SITE_URL'];

if (!process.env.VITE_FORMSPREE_FORM_ID?.trim()) {
  console.warn('VITE_FORMSPREE_FORM_ID not set: the contact section will show direct email/LinkedIn instead of the form.');
}
const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length > 0) {
  console.error(`Missing required production variables: ${missing.join(', ')}`);
  console.error('Copy .env.example to .env and replace every example value before building.');
  process.exit(1);
}

let siteUrl;
try {
  siteUrl = new URL(process.env.VITE_SITE_URL);
} catch {
  console.error('VITE_SITE_URL must be a valid absolute URL.');
  process.exit(1);
}

if (!['http:', 'https:'].includes(siteUrl.protocol)) {
  console.error('VITE_SITE_URL must use http or https.');
  process.exit(1);
}

if (/your-domain|example\.com|tu-dominio/i.test(siteUrl.hostname)) {
  console.error('VITE_SITE_URL still contains an example domain. Configure the final Hostinger domain.');
  process.exit(1);
}

if (/your-form-id|testform/i.test(process.env.VITE_FORMSPREE_FORM_ID || '')) {
  console.error('VITE_FORMSPREE_FORM_ID still contains an example value. Configure the final Formspree form ID.');
  process.exit(1);
}
