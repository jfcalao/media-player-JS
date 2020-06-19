import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')

const player = new MediaPlayer({ el: video, plugin: [new AutoPlay()]})
const muter= new MediaPlayer({el:video})


playButton.onclick = () => player.playPause()
muteButton.onclick = () => muter.muteToggle()


