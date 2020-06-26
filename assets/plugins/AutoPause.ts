import MediaPlayer from "../MediaPlayer"
class AutoPause {
  private threshold: number
  player: MediaPlayer
  constructor(){
    this.threshold=0.25
    this.handlerIntersection=this.handlerIntersection.bind(this)
    this.handlerVisibility=this.handlerVisibility.bind(this)

  }
  run(player) {
    this.player=player
    document.addEventListener('visibilitychange', this.handlerVisibility)
    const observer= new IntersectionObserver(this.handlerIntersection, { threshold: this.threshold })
    observer.observe(player.media)
  }
  handlerIntersection(entries: IntersectionObserverEntry[]){
    const entry=entries[0]
    console.log(entry)
    entry.intersectionRatio>=this.threshold
    ? this.player.play() : this.player.pause()
  }
  handlerVisibility(){
    document.visibilityState==='visible'?this.player.play() : this.player.pause();
  }
}
export default AutoPause