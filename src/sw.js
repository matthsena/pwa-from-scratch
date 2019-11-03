const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.js'
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
