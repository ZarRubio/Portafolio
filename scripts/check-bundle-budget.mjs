import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const output = path.resolve('build/client');
const html = await readFile(path.join(output, 'index.html'), 'utf8');
const modulePaths = [...html.matchAll(/<link rel="modulepreload" href="([^"]+\.js)"/g)].map((match) => match[1]);
const uniqueModules = [...new Set(modulePaths)];
let compressedBytes = 0;

for (const modulePath of uniqueModules) {
  const source = await readFile(path.join(output, modulePath.replace(/^\//, '')));
  compressedBytes += gzipSync(source).byteLength;
}

// 170 KB: v2 home adds brand logos (simple-icons), cursor follower and tabbed sections.
const budgetBytes = 170 * 1024;
const compressedKilobytes = compressedBytes / 1024;
console.log(`Critical JavaScript: ${compressedKilobytes.toFixed(1)} KB gzip / 170 KB budget.`);

if (compressedBytes > budgetBytes) {
  console.error(`Critical JavaScript exceeds the budget by ${((compressedBytes - budgetBytes) / 1024).toFixed(1)} KB gzip.`);
  process.exit(1);
}
