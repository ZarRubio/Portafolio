import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./app', import.meta.url)) },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['app/**/*.{test,spec}.{js,jsx}'],
    exclude: ['tests/e2e/**', 'node_modules/**', 'build/**'],
    setupFiles: ['./app/test/setup.js'],
    css: false,
    coverage: { reporter: ['text', 'html'] },
  },
});
