
function MediaPlayer(config) {
    this.media = config.el
    this.plugins=config.plugin || []
    
    this._initPlugins()
}

MediaPlayer.prototype._initPlugins=function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });

}
MediaPlayer.prototype.play=function(){
    this.media.play()

}
MediaPlayer.prototype.playPause = function () {
    if (this.media.paused) {
        console.log('entró play')
        this.play()
    } else {
        this.media.pause()
    }
}
MediaPlayer.prototype.mute=function(){
    this.media.muted=true
}
MediaPlayer.prototype.unMute=function(){
    this.media.muted=false
}


MediaPlayer.prototype.muteToggle = function() {
    if (this.media.muted) {
        this.unMute()
    } else {
        this.mute()
    }
}

export default MediaPlayer