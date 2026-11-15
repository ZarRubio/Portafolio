import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRouter()],
  // React Router's prerender talks to a local preview server; force IPv4 so it also works on build hosts without IPv6 localhost (Hostinger).
  preview: { host: '127.0.0.1' },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './app'),
    },
  },
});
