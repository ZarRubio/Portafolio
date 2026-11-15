import { CursorGlow } from '@/components/CursorGlow';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { getDictionary } from '@/content/portfolio';

export function SiteShell({ locale, children }) {
  const copy = getDictionary(locale);

  return (
    <div className='site-shell'>
      <a className='skip-link' href='#main-content'>{copy.skip}</a>
      <div id='top-sentinel' className='top-sentinel' aria-hidden='true' />
      <Navigation locale={locale} />
      {children}
      <Footer locale={locale} />
      <CursorGlow />
    </div>
  );
}
