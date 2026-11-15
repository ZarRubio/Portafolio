import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const baseUrl = 'http://127.0.0.1:4173';
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

let chrome;
try {
  await waitForServer();
  chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
  const result = await lighthouse(baseUrl, {
    port: chrome.port,
    output: 'json',
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'mobile',
  });

  const scores = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([key, category]) => [key, Math.round(category.score * 100)]),
  );
  await mkdir('test-results/lighthouse', { recursive: true });
  await writeFile(path.resolve('test-results/lighthouse/mobile.json'), result.report, 'utf8');
  console.log(scores);

  const failed = [
    scores.performance < 90 && `performance ${scores.performance} < 90`,
    scores.accessibility < 95 && `accessibility ${scores.accessibility} < 95`,
    scores['best-practices'] < 95 && `best-practices ${scores['best-practices']} < 95`,
    scores.seo < 95 && `seo ${scores.seo} < 95`,
  ].filter(Boolean);
  if (failed.length > 0) throw new Error(`Lighthouse targets missed: ${failed.join(', ')}`);
} finally {
  try {
    await chrome?.kill();
  } catch (error) {
    if (error?.code !== 'EPERM') throw error;
  }
  server.kill();
}
