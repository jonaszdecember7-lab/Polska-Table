const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'dist', 'index.html');
const dest = path.resolve(__dirname, '..', 'dist', '404.html');

try {
  fs.copyFileSync(src, dest);
  console.log('Copied dist/index.html to dist/404.html');
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}