const cacheName = 'v1'
const cacheAssets = [
    '/index.html',
    '/src/style/style.css',
    '/src/scripts/burgerMenu.js',
    '/src/fonts/RussoOne-Regular.ttf',
    '/src/images/0.webp',
    '/src/images/1.webp',
    '/src/images/2.webp',
    '/src/images/3.webp',
    '/src/images/4.webp',
    '/src/images/5.webp',
    '/src/images/6.webp',
    '/src/images/7.webp',
    '/src/images/8.webp',
    '/src/images/11.webp',
    '/src/images/21.webp',
    '/src/images/22.webp',
]


self.addEventListener('install', (event) => {
    console.log('service worker: installed')

    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('service worker: caching files')
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', (event) => {
    console.log('service worker: actived')

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('del')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})