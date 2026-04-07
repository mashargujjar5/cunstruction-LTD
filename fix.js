import fs from 'fs';

async function d() {
  const imgs = [
    {n: 'proc_2.jpg', u: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {n: 'proc_2_hov.jpg', u: 'https://images.pexels.com/photos/8145266/pexels-photo-8145266.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {n: 'proc_3.jpg', u: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {n: 'proc_3_hov.jpg', u: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=800'}
  ];
  for (let i of imgs) {
    console.log("Fetching", i.n);
    const res = await fetch(i.u, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}});
    const buf = await res.arrayBuffer();
    fs.writeFileSync('./src/assets/process/' + i.n, Buffer.from(buf));
    console.log("Saved", i.n);
  }
}
d();
