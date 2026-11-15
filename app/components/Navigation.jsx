import { ArrowUpRight, DownloadSimple, GlobeHemisphereWest, Moon, Sun } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { getAlternatePath, getDictionary, getHomePath, profile } from '@/content/portfolio';

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navigation({ locale }) {
  const copy = getDictionary(locale);
  const location = useLocation();
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeHash, setActiveHash] = useState('');
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const homePath = getHomePath(locale);
  const targetLocale = locale === 'es' ? 'en' : 'es';
  const targetLocaleName = getDictionary(targetLocale).localeName;
  const alternatePath = getAlternatePath(location.pathname, targetLocale);

  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel');
    if (!sentinel) return undefined;

    const observer = new IntersectionObserver(([entry]) => setIsPastHero(!entry.isIntersecting), {
      rootMargin: '-24px 0px 0px 0px',
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll spy: highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = copy.nav.map((item) => document.getElementById(item.hash)).filter(Boolean);
    if (sections.length === 0 || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveHash(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname, copy.nav]);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusable = panel ? [...panel.querySelectorAll(focusableSelector)] : [];
    focusable[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const sectionHref = (hash) => `${homePath}#${hash}`;

  return (
    <>
      <header className='site-nav nav-entry'>
        <nav className={`nav-island ${isPastHero ? 'nav-island--solid' : ''}`} aria-label={copy.navigation}>
          <Link to={homePath} className='brand' aria-label={profileLabel(locale)}>
            <span className='brand-mark'>AR</span>
            <span className='brand-name'>Adrián Rubio</span>
          </Link>

          <div className='nav-links'>
            {copy.nav.map((item) => (
              <Link
                key={item.hash}
                to={sectionHref(item.hash)}
                className='nav-link'
                aria-current={activeHash === item.hash ? 'true' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className='nav-actions'>
            <Link to={alternatePath} className='locale-link' lang={targetLocale} aria-label={targetLocaleName}>
              <GlobeHemisphereWest size={16} weight='light' />
              {copy.alternateLocale}
            </Link>
            <button
              type='button'
              className='theme-toggle'
              onClick={toggleTheme}
              aria-label={theme === 'light' ? copy.home.themeToDark : copy.home.themeToLight}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} className='button button--nav nav-cv' download>
                <DownloadSimple size={15} weight='bold' />
                <span>CV</span>
              </a>
            ) : (
              <Link to={sectionHref('contact')} className='button button--nav'>
                <span>{copy.contactCta}</span>
                <span className='button-icon'><ArrowUpRight size={15} weight='light' /></span>
              </Link>
            )}
            <button
              ref={triggerRef}
              type='button'
              className='menu-trigger'
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
              aria-label={isOpen ? copy.menuClose : copy.menuOpen}
              onClick={() => setIsOpen((value) => !value)}
            >
              <span className={`menu-line menu-line--top ${isOpen ? 'is-open' : ''}`} />
              <span className={`menu-line menu-line--bottom ${isOpen ? 'is-open' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
          <div
            id='mobile-menu'
            ref={panelRef}
            role='dialog'
            aria-modal='true'
            aria-label={copy.navigation}
            className='mobile-menu'
          >
            <div className='mobile-menu-inner'>
              <span className='eyebrow'>{copy.navigation}</span>
              <div className='mobile-links'>
                {copy.nav.map((item, index) => (
                  <div
                    key={item.hash}
                    className='mobile-link-reveal'
                    style={{ '--menu-delay': `${0.08 + index * 0.06}s` }}
                  >
                    <Link to={sectionHref(item.hash)} className='mobile-link'>
                      <span>{item.label}</span>
                      <ArrowUpRight size={22} weight='light' />
                    </Link>
                  </div>
                ))}
                <div className='mobile-link-reveal' style={{ '--menu-delay': '0.38s' }}>
                  <Link to={sectionHref('contact')} className='mobile-link mobile-link--accent'>
                    <span>{copy.contactCta}</span>
                    <ArrowUpRight size={22} weight='light' />
                  </Link>
                </div>
              </div>
              <Link to={alternatePath} className='mobile-locale' lang={targetLocale}>
                <GlobeHemisphereWest size={18} weight='light' />
                {targetLocale === 'en' ? 'English' : 'Español'}
              </Link>
            </div>
          </div>
      )}
    </>
  );
}

function profileLabel(locale) {
  return locale === 'es' ? 'Ir al inicio de Adrián Rubio' : 'Go to Adrián Rubio home';
}
