import fs from 'node:fs/promises';
import path from 'node:path';
import { getHomePath, getProjectPath, profile, projectCases } from '../app/content/portfolio.js';

const siteUrl = process.env.VITE_SITE_URL.replace(/\/$/, '');
const outputDirectory = path.resolve('build/client');
const routes = [
  { path: getHomePath('es'), priority: '1.0', changefreq: 'monthly' },
  { path: getHomePath('en'), priority: '0.9', changefreq: 'monthly' },
  ...projectCases.flatMap((project) => [
    { path: getProjectPath(project, 'es'), priority: '0.8', changefreq: 'monthly' },
    { path: getProjectPath(project, 'en'), priority: '0.8', changefreq: 'monthly' },
  ]),
];

const absolute = (pathname) => `${siteUrl}${pathname === '/' ? '' : pathname}`;
const lastModified = new Date().toISOString().slice(0, 10);
const xmlRoutes = routes
  .map(
    ({ path: routePath, priority, changefreq }) => `  <url>\n    <loc>${absolute(routePath)}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlRoutes}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
const projectLines = projectCases
  .flatMap((project) => [
    `- [${project.content.es.title}](${absolute(getProjectPath(project, 'es'))}): ${project.content.es.summary}`,
    `- [${project.content.en.title}](${absolute(getProjectPath(project, 'en'))}): ${project.content.en.summary}`,
  ])
  .join('\n');
const llms = `# ${profile.name}\n\nFull Stack & AI Developer in Lima: generative AI agents, RAG, and full stack business applications (Next.js, Node.js, Python, SQL).\n\n## Main pages\n- [Portafolio en español](${siteUrl})\n- [Portfolio in English](${siteUrl}/en)\n\n## Case studies\n${projectLines}\n`;

await fs.mkdir(outputDirectory, { recursive: true });
await Promise.all([
  fs.writeFile(path.join(outputDirectory, 'robots.txt'), robots, 'utf8'),
  fs.writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap, 'utf8'),
  fs.writeFile(path.join(outputDirectory, 'llms.txt'), llms, 'utf8'),
]);

console.log('Generated robots.txt, sitemap.xml, and llms.txt in build/client.');
