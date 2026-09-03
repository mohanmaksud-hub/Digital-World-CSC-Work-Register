const CACHE='digital-world-csc-v1';
const ASSETS=['./','./index.html','./manifest.json','./1000486972.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
