const VERSION= 'v1'
self.addEventListener('install', event=>{
  console.log('Install Event')
  event.waitUntil(precache())
  console.log('ya')
})
self.addEventListener('fetch', event=>{
  console.log('Fetch Event')
  const request= event.request
  if(request.method != 'GET'){
    return
  }
  //Buscar en cache
  event.respondWith(cacheResponse(request))
  event.waitUntil(updateCache(request))
})

async function precache(){
  console.log('precache')
  const cache= await caches.open(VERSION)
  console.log(cache);
  return cache.addAll([
    /* '/',
    '/index.html',
    '/assets/index.js',
    '/assets/index.css',
    '/assets/MediaPlayer.js',
    '/assets/BigBuckBunny.mp4',
    '/assets/pluggins/AutoPlay.js',
    '/assets/pluggins/AutoPause.js' */
  ])
}
async function cacheResponse(request){

  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}
async function updateCache(request){
  const cache = await caches.open(VERSION)
  const response = await fetch(request)

  return cache.put(request, response)
}