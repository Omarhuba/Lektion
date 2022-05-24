// console.log(navigator);
// (async ()=>{
//     if('serviceWorker' in navigator){
//         try{
//             await navigator.serviceWorker.register('./sw.js')
//             console.log('service worker registerd');
//         }catch(err){
//             console.log(err);
//         }
//     }else{
//         console.log("No service")
//     }
// })()


async function registerServiceWorker (){

    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
            console.log('register service worker')
        }catch(err){
            console.log('err service worker')
        }
    }
}
registerServiceWorker()