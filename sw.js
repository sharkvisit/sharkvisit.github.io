// Service worker minimal: syarat agar Chrome menawarkan "Install". Tidak menyimpan data apa pun.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
