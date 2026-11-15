# AGENTS.md

This file provides guidance to Codex (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (Spanish default, English) static portfolio for Adrián Rubio, built with React 19 + React Router 8 in Framework Mode with `ssr: false` and build-time prerendering. Deployed as static files to Hostinger (Apache). README and UI copy are in Spanish.

## Commands

Node 24 (`.nvmrc`; `engines` allows >=22.22 <25).

- `npm run dev` — dev server on http://127.0.0.1:3000
- `npm run build` — validates env, prerenders to `build/client`, generates `robots.txt`/`sitemap.xml`/`llms.txt`, then enforces a 150 KB gzip budget on critical (modulepreloaded) JS
- `npm run preview` — custom static server (`scripts/preview.mjs`) on 127.0.0.1:4173 serving `build/client` with clean URLs, legacy redirects, gzip and SPA fallback
- `npm test` — Vitest (jsdom), only `app/**/*.{test,spec}.{js,jsx}`
- Single unit test: `npx vitest run app/components/ContactForm.test.jsx` (or `-t "test name"`)
- `npm run test:e2e` — Playwright (Chromium) in `tests/e2e/`, includes axe checks; auto-starts `npm run preview`, so **run `npm run build` first**
- Single e2e test: `npx playwright test -g "test name"`
- `npm run audit:visual` / `npm run audit:lighthouse` — screenshots at 320/768/1440 px; Lighthouse mobile thresholds 90/95/95/95

There is no lint script.

### Build requires real env values

`scripts/validate-env.mjs` fails the build unless `VITE_SITE_URL` (absolute http/https URL) and `VITE_FORMSPREE_FORM_ID` are set to non-placeholder values (it rejects `your-domain`, `example.com`, `your-form-id`, etc.). Copy `.env.example` to `.env` and fill it in. In dev, `VITE_SITE_URL` falls back to `http://localhost:3000`, and the contact form shows a mail fallback when the Formspree ID is missing.

## Architecture

**Only `app/` is live code.** `src/`, `dist/`, root `index.html`, `plugins/` and `tools/` are leftovers from the previous Vite SPA and are not used by the React Router build (`app/` is the framework's appDirectory; Tailwind `content` only scans `./app`).

- `app/routes.js` — explicit route config: `/` (es home), `/en`, `/proyectos/:slug`, `/en/projects/:slug`, `*` (404). Each locale has its own thin route module that passes `locale` to a shared component (`HomePage`, `ProjectPage`) and exports `meta` from `app/lib/seo.js`.
- `app/root.jsx` — document `Layout`; derives `<html lang>` from whether the path starts with `/en`.
- `app/content/portfolio.js` — **single source of truth** for all content and i18n: `profile`, per-locale `dictionary` (UI strings), `experienceItems`, `skillGroups`, `credentials`, `projectCases` (each with per-locale `slugs` and `content`), plus path helpers (`getHomePath`, `getProjectPath`, `getProjectBySlug`, `getAlternatePath`, `getPrerenderPaths`). Locale is always passed explicitly as `'es' | 'en'`; there is no i18n library.
- Prerendered routes come from `getPrerenderPaths()` (used by `react-router.config.js`), and `scripts/generate-public-files.mjs` builds the sitemap from the same helpers — adding a project to `projectCases` automatically adds its pages, sitemap entries and `llms.txt` lines.
- `app/lib/seo.js` — builds meta arrays: canonical, `hreflang` alternates (es/en/x-default), Open Graph/Twitter, and JSON-LD.
- `ContactForm` posts directly to `https://formspree.io/f/${VITE_FORMSPREE_FORM_ID}`.
- `@/` alias resolves to `app/` (configured separately in `vite.config.js` and `vitest.config.js`).
- Styling: Tailwind 3 + `app/styles/app.css`; fonts via `@fontsource-variable/*`; icons from `@phosphor-icons/react`. Watch the critical-JS budget when adding dependencies.

### Content conventions

Optional links (project demo/repository, `cvUrl`, certificate URLs) are `null` until real public evidence exists, and components render no CTA for a `null` URL. `credentials` is intentionally empty for the same reason. Don't fill these with placeholders.

### Deployment

Hostinger: build command `npm run build`, public directory `build/client`. `public/.htaccess` serves the prerendered HTML, redirects old SPA routes (`/about`, `/projects`, `/contact`, …) to home anchors, sets caching/compression, and falls back to `__spa-fallback.html` for unknown routes. Keep the redirect list in `.htaccess` and `scripts/preview.mjs` in sync.
