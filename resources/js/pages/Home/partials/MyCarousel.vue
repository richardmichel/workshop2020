<template>
	<b-carousel
			id="carousel-1"
			v-model="slide"
			:interval="2000"
			fade
			indicators
			background="#00"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
	>
		<!-- Text slides with image -->
		<b-carousel-slide
				v-for="(item, index) in items"
				caption="Tu próxima historia, ahora"
				text="DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS."
				:img-src="item.url"
		></b-carousel-slide>

	</b-carousel>
</template>

<script>
	export default {
		name: "MyCarousel",
		data: ()=>({
			slide: 0,
			sliding: null,
			items: [
				{
					url: "/api/file/show-file/bad-boys-3-l.jpg"
				},
				{
					url: "/api/file/show-file/fast-and-furious-l.jpeg"
				},
				{
					url : "/api/file/show-file/jurassic-world-l1.jpg"
				}
			]
		}),
		methods: {
			onSlideStart(slide) {
				this.sliding = true
			},
			onSlideEnd(slide) {
				this.sliding = false
			}
		}
	}
</script>

<style scoped>

</style>