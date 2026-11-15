import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './app'),
    },
  },
});
