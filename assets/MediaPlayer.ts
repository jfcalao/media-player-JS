
class MediaPlayer {
	media: HTMLMediaElement
	plugins: Array<any>
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugin || [];
		this.initPlugins();
	}
	initPlugins() {

		this.plugins.forEach(plugin => {
			plugin.run(this);
		});

	}
	play() {
		this.media.play();
	}
	pause() {
		this.media.pause();
	}
	playPause() {
		if (this.media.paused) {
			this.play();
		}
		else {
			this.pause();
		}
	}
	mute() {
		this.media.muted = true;
	}
	unMute() {
		this.media.muted = false;
	}
	muteToggle() {
		if (this.media.muted) {
			this.unMute();
		}
		else {
			this.mute();
		}
	}
}




export default MediaPlayer