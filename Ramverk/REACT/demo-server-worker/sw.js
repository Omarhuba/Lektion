self.addEventListener('install', event =>{
    console.log(' anna');
    self.skipWaiting()

    console.log('sw installed');
})
self.addEventListener('activate', event =>{
    console.log('sw activated');
})

self.addEventListener('fetch', event =>{
    event.respondWith(
        new Response('<h1>hello</h1>', {headers: {'Content-Type': 'text/html'}}
    )
    )
})