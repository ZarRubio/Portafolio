import { getPrerenderPaths } from './app/content/portfolio.js';

export default {
  ssr: false,
  basename: process.env.BASE_PATH || '/',
  prerender: getPrerenderPaths(),
};
