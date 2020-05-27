<template>
	<div>
	<b-carousel
			v-show="show"
			id="carousel-1"
			v-model="slide"
			:interval="2000"
			fade
			indicators
			background="#000"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
	>
		<!-- Text slides with image -->

		<b-carousel-slide
				v-for="(item, index) in items"
				:caption="item.title"
				:text="item.description"
				:img-src="item.url"
				:key="index"
		>

		</b-carousel-slide>


	</b-carousel>
	</div>
</template>

<script>
	export default {
		name: "MyCarousel",
		data: ()=>({
			slide: 0,
			sliding: null,
			items: [
				{
					url: "/api/file/show-file/bad-boys-3-l.jpg",
					title: "Tu próxima historia, ahora",
					description: "DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS."
				},
				{
					url: "/api/file/show-file/fast-and-furious-l.jpeg",
					title: "Estreno ",
					description: "EL MEJOR ENTRETEMIENTO"
				},
				{
					url : "/api/file/show-file/jurassic-world-l1.jpg",
					title: "Increible",
					description: "DISFRUTA DESDE TU SALA."
				},

			],
			show: true
		}),
		methods: {
			onSlideStart(slide) {
				this.sliding = true
			},
			onSlideEnd(slide) {
				this.sliding = false
			},
			init(){
				if(this.$route.name === "Home"){
					this.show = true;
				}else{
					this.show = false;
				}

			}
		},
		created(){
			this.init();
		},
		watch:{
			'$route'(value){
				this.init();
			}
		}

	}
</script>

<style scoped>

</style>