function registerServiceWorker (){

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js')
        .then(()=> console.log('register service worker'))
        .catch((err)=> console.log('err service worker'))
    }
}
registerServiceWorker()