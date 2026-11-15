import { getPrerenderPaths } from './app/content/portfolio.js';

export default {
  ssr: false,
  prerender: getPrerenderPaths(),
};
