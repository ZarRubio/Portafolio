import { describe, expect, it } from 'vitest';
import {
  credentials,
  dictionary,
  getAlternatePath,
  getPrerenderPaths,
  getProjectBySlug,
  getProjectPath,
  LOCALES,
  projectCases,
} from './portfolio';

describe('bilingual portfolio content', () => {
  it('provides complete route content for both locales', () => {
    expect(LOCALES).toEqual(['es', 'en']);
    expect(dictionary.es.hero.title).toBeTruthy();
    expect(dictionary.en.hero.title).toBeTruthy();
    expect(projectCases).toHaveLength(7);

    for (const project of projectCases) {
      for (const locale of LOCALES) {
        expect(project.content[locale].title).toBeTruthy();
        expect(project.content[locale].constraints).not.toHaveLength(0);
        expect(project.content[locale].decisions).not.toHaveLength(0);
        expect(project.content[locale].outcomes).not.toHaveLength(0);
        expect(project.diagram[locale]).toHaveLength(4);
      }
    }
  });

  it('generates the sixteen static routes without duplicates', () => {
    const routes = getPrerenderPaths();
    expect(routes).toHaveLength(16);
    expect(new Set(routes).size).toBe(routes.length);
    expect(routes).toContain('/');
    expect(routes).toContain('/en');
  });

  it('keeps the equivalent case study when switching locale', () => {
    const project = projectCases[0];
    expect(getAlternatePath(getProjectPath(project, 'es'), 'en')).toBe(getProjectPath(project, 'en'));
    expect(getAlternatePath(getProjectPath(project, 'en'), 'es')).toBe(getProjectPath(project, 'es'));
    expect(getProjectBySlug('en', project.slugs.en)).toBe(project);
  });

  it('only links to public https evidence and localizes every metric', () => {
    for (const credential of credentials) {
      expect(credential.certificateUrl).toMatch(/^https:\/\//);
      expect(credential.name.es).toBeTruthy();
      expect(credential.name.en).toBeTruthy();
    }
    for (const project of projectCases) {
      for (const url of [project.links.demoUrl, project.links.repositoryUrl]) {
        if (url !== null) expect(url).toMatch(/^https:\/\//);
      }
      for (const metric of project.metrics ?? []) {
        expect(metric.value).toBeTruthy();
        expect(metric.label.es).toBeTruthy();
        expect(metric.label.en).toBeTruthy();
      }
    }
  });
});
