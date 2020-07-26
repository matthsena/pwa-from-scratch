const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './assets/css/style.css',
    './assets/js/app.js',
    './manifest.json',
    './img/barcat-72x72.png',
    './img/barcat-96x96.png',
    './img/barcat-128x128.png',
    './img/barcat-144x144.png',
    './img/barcat-152x152.png',
    './img/barcat-192x192.png',
    './img/barcat-384x384.png',
    './img/barcat-512x512.png'
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.info('opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => {
                    return key.indexOf(CACHE_NAME) !== 0
                }).map((key) => {
                    return caches.delete(key)
                }))
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request)
        })
    )
})
