import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')

const player = new MediaPlayer({ el: video, plugin: [new AutoPlay(), new AutoPause()]})
const muter= new MediaPlayer({el:video})

playButton.onclick = () =>player.playPause() 
muteButton.onclick = () => muter.muteToggle()

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error=>console.log(error.message))

}