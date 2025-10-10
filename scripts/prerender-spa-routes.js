const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');

const routes = [
  '/',
  '/impact-analysis',
  '/implementation-plans',
  '/integrations',
  '/variance',
  '/product-managers',
  '/engineering-managers',
  '/developers',
  '/about',
  '/pricing',
  '/legal/subprocessor',
  '/privacy-policy',
  '/security',
];

function ensureDirSync(dirPath) {
  if (fs.existsSync(dirPath)) return;
  ensureDirSync(path.dirname(dirPath));
  try { fs.mkdirSync(dirPath); } catch {}
}

function copyIndexToRoute(routePath) {
  const destDir = path.join(buildDir, routePath);
  const destFile = path.join(destDir, 'index.html');
  const srcFile = path.join(buildDir, 'index.html');
  ensureDirSync(destDir);
  fs.copyFileSync(srcFile, destFile);
}

function main() {
  if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found:', buildDir);
    process.exit(1);
  }

  routes.forEach((route) => {
    const normalized = route.startsWith('/') ? route.slice(1) : route;
    const routePath = normalized.length === 0 ? '' : normalized;
    copyIndexToRoute(routePath);
  });

  console.log('Prerendered SPA routes for GitHub Pages.');
}

main();


