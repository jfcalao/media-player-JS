
function MediaPlayer(config) {
	this.media = config.el
	this.plugins = config.plugin || []
	this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function () {
	const player={
		play: this.play,
		pause: this.pause,
		mute: this.mute,
		media: this.media,
		get muted(){
			this.media.muted
		},
		set muted(value){
			this.media.muted=value
		}
	}
	this.plugins.forEach(plugin => {
		plugin.run(player)
	});

}
MediaPlayer.prototype.play = function () {
	this.media.play()
}
MediaPlayer.prototype.pause = function () {
	this.media.pause()
}
MediaPlayer.prototype.playPause =  function(){
	if (this.media.paused) {
		this.play()
	} else {
		this.pause()
	}
}
MediaPlayer.prototype.mute = function () {
	this.media.muted = true
}
MediaPlayer.prototype.unMute = function () {
	this.media.muted = false
}


MediaPlayer.prototype.muteToggle = function () {
	if (this.media.muted) {
		this.unMute()
	} else {
		this.mute()
	}
}

export default MediaPlayer