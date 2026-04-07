const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'proc_1.jpg', url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80' }, // Blueprint tools
  { name: 'proc_1_hov.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' }, // Engineer
  { name: 'proc_2.jpg', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80' }, // Hard hats looking at building
  { name: 'proc_2_hov.jpg', url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80' }, // Steel framework
  { name: 'proc_3.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=800&q=80' }, // Cranes sunset
  { name: 'proc_3_hov.jpg', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80' }, // Excavator
  { name: 'proc_4.jpg', url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80' }, // Bricks
  { name: 'proc_4_hov.jpg', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' }  // Modern building
];

const dir = path.join(__dirname, 'src', 'assets', 'process');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

images.forEach(img => {
  const dest = path.join(dir, img.name);
  https.get(img.url, (res) => {
    // Handle redirects
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, (res2) => {
        res2.pipe(fs.createWriteStream(dest));
      });
    } else {
      res.pipe(fs.createWriteStream(dest));
    }
  }).on('error', (err) => console.log('Error: ', err.message));
});
