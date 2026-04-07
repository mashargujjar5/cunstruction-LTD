const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, 'src', 'assets', 'video');
const files = fs.readdirSync(videoDir);

files.forEach(file => {
  if (file.endsWith('.mp4') && file !== 'hero-1.mp4' && file !== 'hero-2.mp4') {
    const oldPath = path.join(videoDir, file);
    const newPath = path.join(videoDir, 'hero-1.mp4');
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${file} to hero-1.mp4`);
    } catch (err) {
      console.error(`Error renaming ${file}:`, err);
    }
  }
});
