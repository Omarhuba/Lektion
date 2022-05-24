/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;
console.log(statics);

self.addEventListener("install", event => {
    event.waitUntil(
      caches.open('hello').then( cache =>
        cache.addAll(statics)
      )
    )
    self.skipWaiting()
        console.log("Installing")
  })

  // self.addEventListener("activate", event => {
  //   console.log("SW Activating")
  // })


  // self.addEventListener("fetch", event => {
  //   console.log("You are requesting ", event.request.url);
  //   event.respondWith(
  //     caches.match(event.request).then(response => {
  //       // If it is in in cache, respond with it
  //       if(response){ return response }
  //       // Otherwise, go to network
  //       return fetch( event.request )
  //     })
  //   )
  // })