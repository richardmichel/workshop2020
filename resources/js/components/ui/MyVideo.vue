<template>
	<video-player  class="video-player-box"
	               ref="videoPlayer"
	               :options="playerOptions"
	               :playsinline="true"
	               customEventName="customstatechangedeventname"

	               @play="onPlayerPlay($event)"
	               @pause="onPlayerPause($event)"
	               @ended="onPlayerEnded($event)"
	               @waiting="onPlayerWaiting($event)"
	               @playing="onPlayerPlaying($event)"
	               @loadeddata="onPlayerLoadeddata($event)"
	               @timeupdate="onPlayerTimeupdate($event)"
	               @canplay="onPlayerCanplay($event)"
	               @canplaythrough="onPlayerCanplaythrough($event)"

	               @statechanged="playerStateChanged($event)"
	               @ready="playerReadied">
	</video-player>
</template>

<script>
	export default {
		props:{
			url:{
				required: true
			},
			poster:{
				required: true
			}
		},
		name: "MyVideo",
		data() {
			return {
				playerOptions: {
					height: '500',
					autoplay: true,
					muted: false,
					language: 'es',
					playbackRates: [0.7, 1.0, 1.5, 2.0],
					sources: [{
						type: "video/mp4",
						src: this.url
					}],
					poster: this.poster,
				}
			}
		},
		mounted() {
			console.log('this is current player instance object', this.player)
		},
		computed: {
			player() {
				return this.$refs.videoPlayer.player
			}
		},
		methods: {
			// listen event
			onPlayerPlay(player) {
				// console.log('player play!', player)
			},
			onPlayerPause(player) {
				// console.log('player pause!', player)
			},
			// ...player event

			// or listen state event
			playerStateChanged(playerCurrentState) {
				// console.log('player current update state', playerCurrentState)
			},

			// player is ready
			playerReadied(player) {
				console.log('the player is readied', player)
				// you can use it to do something...
				// player.[methods]
			},
			onPlayerLoadeddata(){

			},
			onPlayerCanplay(){

			},
			onPlayerPlaying(){

			},
			onPlayerEnded(){

			},
			onPlayerWaiting(){

			},
			onPlayerTimeupdate(){

			},
			onPlayerCanplaythrough(){

			}
		}
	}
</script>

<style >
.video-js{
	width: 100%;
}
</style>