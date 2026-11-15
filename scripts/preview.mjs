import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createGzip } from 'node:zlib';
import path from 'node:path';

const root = path.resolve('build/client');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);
const redirects = new Map([
  ['/about', '/#profile'],
  ['/skills', '/#stack'],
  ['/experience', '/#experience'],
  ['/certifications', '/#profile'],
  ['/projects', '/#work'],
  ['/contact', '/#contact'],
  ['/proyectos/kaeser-platform-api', '/#work'],
  ['/en/projects/kaeser-platform-api', '/en#work'],
  ['/proyectos/unilaunch', '/#work'],
  ['/en/projects/unilaunch', '/en#work'],
  ['/proyectos/ecommerce-tuning', '/#work'],
  ['/en/projects/ecommerce-tuning', '/en#work'],
]);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function safePath(pathname) {
  const relative = pathname.replace(/^\/+/, '');
  const resolved = path.resolve(root, relative);
  return resolved === root || resolved.startsWith(`${root}${path.sep}`) ? resolved : null;
}

createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || host}`);
  const pathname = decodeURIComponent(url.pathname).replace(/\/+$/, '') || '/';
  const redirect = redirects.get(pathname);

  if (redirect) {
    response.writeHead(301, { Location: redirect });
    response.end();
    return;
  }

  let filePath = safePath(pathname);
  if (!filePath) {
    response.writeHead(400).end('Bad request');
    return;
  }

  if (pathname === '/') filePath = path.join(root, 'index.html');
  else if (!path.extname(filePath)) {
    const routeIndex = path.join(filePath, 'index.html');
    filePath = (await isFile(routeIndex)) ? routeIndex : path.join(root, '__spa-fallback.html');
  } else if (!(await isFile(filePath))) {
    filePath = path.join(root, '__spa-fallback.html');
  }

  if (!(await isFile(filePath))) {
    response.writeHead(404).end('Not found');
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const immutable = ['.css', '.js', '.woff2'].includes(extension);
  const compressible = ['.css', '.html', '.js', '.json', '.svg', '.txt', '.xml'].includes(extension);
  response.writeHead(200, {
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
    'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate',
    ...(compressible ? { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' } : {}),
  });
  const stream = createReadStream(filePath);
  if (compressible) stream.pipe(createGzip()).pipe(response);
  else stream.pipe(response);
}).listen(port, host, () => {
  console.log(`Static preview available at http://${host}:${port}`);
});
