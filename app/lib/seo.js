import { getHomePath, getProjectPath, profile } from '@/content/portfolio';

const descriptions = {
  es: 'Portafolio de Adrián Rubio, desarrollador Full Stack & IA en Lima: agentes con LangGraph, RAG, Next.js, Node.js, Python y SQL en aplicaciones de negocio en uso.',
  en: 'Portfolio of Adrián Rubio, a Full Stack & AI Developer in Lima: LangGraph agents, RAG, Next.js, Node.js, Python, and SQL in business applications in real use.',
};

export function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';
  return configured.replace(/\/$/, '');
}

function absolute(pathname) {
  return `${getSiteUrl()}${pathname === '/' ? '' : pathname}`;
}

function sharedMeta({ locale, title, description, pathname, alternatePath, imagePath = '/adrian-rubio.jpg', structuredData }) {
  const canonical = absolute(pathname);
  const alternateLocale = locale === 'es' ? 'en' : 'es';
  const image = absolute(imagePath);

  return [
    { title },
    { name: 'description', content: description },
    { name: 'author', content: profile.name },
    { property: 'og:locale', content: locale === 'es' ? 'es_PE' : 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: profile.name },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { property: 'og:image:alt', content: profile.portraitAlt[locale] },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: locale, href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: alternateLocale, href: absolute(alternatePath) },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: absolute('/') },
    { 'script:ld+json': structuredData },
  ];
}

export function homeMeta(locale) {
  const pathname = getHomePath(locale);
  const alternatePath = getHomePath(locale === 'es' ? 'en' : 'es');
  const title =
    locale === 'es'
      ? 'Adrián Rubio | Desarrollador Full Stack & IA'
      : 'Adrián Rubio | Full Stack & AI Developer';

  return sharedMeta({
    locale,
    title,
    description: descriptions[locale],
    pathname,
    alternatePath,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: absolute(pathname),
      image: absolute('/adrian-rubio.jpg'),
      jobTitle: 'Full Stack & AI Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lima',
        addressCountry: 'PE',
      },
      sameAs: [profile.social.github, profile.social.linkedin],
      knowsAbout: ['Generative AI', 'LangGraph', 'RAG', 'Next.js', 'Node.js', 'Python', 'SQL', 'Java'],
    },
  });
}

export function projectMeta(project, locale) {
  if (!project) return [];
  const content = project.content[locale];
  const pathname = getProjectPath(project, locale);
  const alternatePath = getProjectPath(project, locale === 'es' ? 'en' : 'es');

  return sharedMeta({
    locale,
    title: `${content.title} | ${profile.shortName}`,
    description: content.summary,
    pathname,
    alternatePath,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: content.title,
      description: content.summary,
      creator: {
        '@type': 'Person',
        name: profile.name,
      },
      dateCreated: project.year,
      keywords: project.stack.join(', '),
      url: absolute(pathname),
    },
  });
}

export function notFoundMeta(locale) {
  return [
    { title: locale === 'es' ? `Página no encontrada | ${profile.shortName}` : `Page not found | ${profile.shortName}` },
    { name: 'robots', content: 'noindex, nofollow' },
  ];
}
