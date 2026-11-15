import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { SiteShell } from '@/components/SiteShell';
import { getDictionary, getHomePath } from '@/content/portfolio';

export function NotFoundPage({ locale }) {
  const copy = getDictionary(locale).notFound;

  return (
    <SiteShell locale={locale}>
      <main id='main-content' className='not-found'>
        <div className='bezel not-found-shell'>
          <div className='bezel-core not-found-core'>
            <span className='eyebrow'>{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.copy}</p>
            <Link className='button button--primary' to={getHomePath(locale)}>
              <span>{copy.cta}</span>
              <span className='button-icon'><ArrowUpRight size={16} weight='light' /></span>
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
