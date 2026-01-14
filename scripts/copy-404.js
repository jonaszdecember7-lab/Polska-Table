const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'dist', 'index.html');
const dest = path.resolve(__dirname, '..', 'dist', '404.html');

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('Failed to copy index.html to 404.html:', err);
    process.exit(1);
  }
  console.log('Copied dist/index.html to dist/404.html');
});