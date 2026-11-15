import { ArrowUpRight, EnvelopeSimple, LinkedinLogo, MapPin, PaperPlaneTilt, Phone } from '@phosphor-icons/react';
import { useState } from 'react';
import { getDictionary, profile } from '@/content/portfolio';

export function ContactForm({ locale, formId = import.meta.env.VITE_FORMSPREE_FORM_ID }) {
  const copy = getDictionary(locale).contact;
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formId || status === 'submitting' || status === 'success') return;

    const form = event.currentTarget;
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='contact-layout'>
      <div className='contact-details'>
        <div className='bezel'>
          <div className='bezel-core contact-person'>
            <img src={profile.portrait} width='640' height='640' alt={profile.portraitAlt[locale]} loading='lazy' />
            <div>
              <span className='contact-label'>{copy.direct}</span>
              <strong>{profile.shortName}</strong>
              <span>{profile.location[locale]}</span>
            </div>
          </div>
        </div>

        <a className='contact-method' href={`mailto:${profile.email}`}>
          <span className='contact-method-icon'><EnvelopeSimple size={18} weight='light' /></span>
          <span><small>Email</small>{profile.email}</span>
          <ArrowUpRight size={16} weight='light' />
        </a>
        <a className='contact-method' href={profile.phoneHref}>
          <span className='contact-method-icon'><Phone size={18} weight='light' /></span>
          <span><small>{locale === 'es' ? 'Teléfono' : 'Phone'}</small>{profile.phone}</span>
          <ArrowUpRight size={16} weight='light' />
        </a>
        <a className='contact-method' href={profile.social.linkedin} target='_blank' rel='noreferrer'>
          <span className='contact-method-icon'><LinkedinLogo size={18} weight='light' /></span>
          <span><small>LinkedIn</small>adrianrubiocalixto</span>
          <ArrowUpRight size={16} weight='light' />
        </a>
        <div className='contact-location'>
          <MapPin size={18} weight='light' />
          <span>{profile.location[locale]}</span>
        </div>
      </div>

      <div className='bezel'>
        <div className='bezel-core form-core'>
          {formId ? (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className='form-grid'>
                <label>
                  <span>{copy.name}</span>
                  <input name='name' autoComplete='name' required minLength='2' placeholder={copy.namePlaceholder} />
                </label>
                <label>
                  <span>{copy.email}</span>
                  <input name='email' type='email' autoComplete='email' required placeholder={copy.emailPlaceholder} />
                </label>
                <label className='form-span'>
                  <span>{copy.subject}</span>
                  <input name='subject' required minLength='3' placeholder={copy.subjectPlaceholder} />
                </label>
                <label className='form-span'>
                  <span>{copy.message}</span>
                  <textarea name='message' required minLength='20' rows='6' placeholder={copy.messagePlaceholder} />
                </label>
                <label className='honeypot' aria-hidden='true'>
                  Website
                  <input name='_gotcha' tabIndex='-1' autoComplete='off' />
                </label>
              </div>
              <div className='form-footer'>
                <p>{copy.privacy}</p>
                <button className='button button--primary' type='submit' disabled={status === 'submitting' || status === 'success'}>
                  <span>{status === 'submitting' ? copy.submitting : copy.submit}</span>
                  <span className='button-icon'><PaperPlaneTilt size={16} weight='light' /></span>
                </button>
              </div>
              <div className={`form-status form-status--${status}`} role='status' aria-live='polite'>
                {status === 'success' && <><strong>{copy.successTitle}</strong><span>{copy.success}</span></>}
                {status === 'error' && <><strong>{copy.errorTitle}</strong><span>{copy.error}</span></>}
              </div>
            </form>
          ) : (
            <div className='form-missing'>
              <EnvelopeSimple size={28} weight='light' />
              <p>{copy.configurationMissing}</p>
              <a className='button button--primary' href={`mailto:${profile.email}`}>
                <span>{copy.direct}</span>
                <span className='button-icon'><ArrowUpRight size={16} weight='light' /></span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
