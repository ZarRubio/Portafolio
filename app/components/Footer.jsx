import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getDictionary, getHomePath, profile } from '@/content/portfolio';

export function Footer({ locale }) {
  const copy = getDictionary(locale);
  const homePath = getHomePath(locale);
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='container footer-grid'>
        <div>
          <Link to={homePath} className='footer-name'>{profile.shortName}</Link>
          <p className='footer-statement'>{copy.footer.statement}</p>
        </div>
        <div className='footer-links' aria-label={locale === 'es' ? 'Enlaces sociales' : 'Social links'}>
          <a href={profile.social.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
            <GithubLogo size={19} weight='light' />
          </a>
          <a href={profile.social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <LinkedinLogo size={19} weight='light' />
          </a>
          <a href={`mailto:${profile.email}`} aria-label='Email'>
            <PaperPlaneTilt size={19} weight='light' />
          </a>
        </div>
      </div>
      <div className='container footer-bottom'>
        <p>© {year} {profile.name}. {copy.footer.rights}</p>
        <p>{copy.footer.built}</p>
      </div>
    </footer>
  );
}
