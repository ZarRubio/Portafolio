import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:4173';
const output = path.resolve('test-results/visual');
const server = spawn(process.execPath, ['scripts/preview.mjs'], { stdio: 'ignore', windowsHide: true });

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The preview can take a moment to bind the port.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error('The static preview did not become available.');
}

let browser;
try {
  await waitForServer();
  await mkdir(output, { recursive: true });
  browser = await chromium.launch({ headless: true });

  for (const width of [320, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const consoleErrors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let position = 0; position < pageHeight; position += 650) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), position);
      await page.waitForTimeout(60);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(120);
    await page.screenshot({ path: path.join(output, `home-${width}.png`), fullPage: true });
    if (consoleErrors.length > 0) throw new Error(`Console errors at ${width}px: ${consoleErrors.join(' | ')}`);
    await page.close();
  }

  console.log(`Visual audit screenshots written to ${output}`);
} finally {
  await browser?.close();
  server.kill();
}
