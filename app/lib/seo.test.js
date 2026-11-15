import { describe, expect, it, vi } from 'vitest';
import { projectCases } from '@/content/portfolio';
import { homeMeta, notFoundMeta, projectMeta } from './seo';

function findMeta(meta, key, value) {
  return meta.find((item) => item[key] === value);
}

describe('route metadata', () => {
  it('emits canonical, hreflang, social cards and Person JSON-LD', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://portfolio.test');
    const meta = homeMeta('es');

    expect(findMeta(meta, 'rel', 'canonical').href).toBe('https://portfolio.test');
    expect(findMeta(meta, 'hrefLang', 'en').href).toBe('https://portfolio.test/en');
    expect(findMeta(meta, 'name', 'twitter:card').content).toBe('summary_large_image');
    expect(meta.find((item) => item['script:ld+json'])['script:ld+json']['@type']).toBe('Person');
  });

  it('uses the real bilingual project path in CreativeWork metadata', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://portfolio.test');
    const meta = projectMeta(projectCases[1], 'en');
    expect(findMeta(meta, 'rel', 'canonical').href).toBe('https://portfolio.test/en/projects/mobile-quoting-app');
    expect(meta.find((item) => item['script:ld+json'])['script:ld+json']['@type']).toBe('CreativeWork');
  });

  it('marks 404 pages as noindex', () => {
    expect(findMeta(notFoundMeta('es'), 'name', 'robots').content).toBe('noindex, nofollow');
  });
});
