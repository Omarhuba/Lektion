
self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open('gtillkorv').then( cache => cache.addAll([
            '/',
            'index.html',
            'main.css',
            'manifest.json'
        ]))
    )
    self.skipWaiting()
    console.log('sw installed');
})

self.addEventListener('activate', event=>{
    console.log('sw activated');
})

self.addEventListener('fetch'
, event => {
    console.log('You are requesting', event.request.url)
    event.respondWith(
        caches.match(event.request).then(response =>{
            const markup = '<h1>Seems you are offline!.</h1>';
            const headers = { 'Content-Type': 'text/html' }
            const response = new Response(markup, {headers})
            if (!navigator.onLine) {
                if(response){ return response}

            }else {
                  return fetch(event.request)
              }

        })
    )
})

self.addEventListener('fetch', event => {
      if (!navigator.onLine) {
        const markup = '<h1>Seems you are offline!.</h1>';
        const headers = { 'Content-Type': 'text/html' }
        const response = new Response(markup, {headers})
        event.respondWith(response);
      }else {
        event.respondWith(fetch(event.request))
      }
    });

// self.addEventListener("install", (event) => {
//     self.skipWaiting();
//     console.log(event);
//   });

//   self.addEventListener("activate", (event) => {
//     console.log(event);
//     console.log("activated");
//   });

//   self.addEventListener("install", (event) => {
//     event.waitUntil(
//       caches.open("myCache").then((cache) => {
//         cache.addAll(["index.html", "main.js", "style.css"]);
//       })
//     );
//   });

//   self.addEventListener("fetch", (event) => {
//     event.respondWith(caches.match(event.request)).then((response) => {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request);
//       }
//     });
//   })