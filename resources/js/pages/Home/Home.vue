<template>
	<div>

		<b-row>
			<b-col sm="4" style="margin-top: 10px"  v-for="(item, index) in movies" :key="index">
				<b-card
						overlay
						:img-src="item.poster"
						img-alt="Card Image"
						text-variant="dark"
						title=""
						sub-title="">
					<b-text style="position: absolute;bottom: 0;left: 0;right: 0;">
						<b-row style="margin:  0 auto">
							<b-col sm="6">

								<b-button v-b-modal.modal-1  @click="setVideo(item)">
									<i class="fas fa-play fa-lg cursor-select increment-size"></i>
								</b-button>


							</b-col>
							<b-col sm="6" style="text-align:right;">
								<div class="cursor-select">
									<i class="far fa-thumbs-up fa-lg"></i>
								</div>
								<div class="cursor-select">
									<i class="far fa-thumbs-down fa-lg"></i>
								</div>
								<div class="cursor-select">
									<i class="fas fa-plus fa-lg"></i>
								</div>
							</b-col>
						</b-row>
					</b-text>
				</b-card>
			</b-col>
		</b-row>


		<b-modal id="modal-1"  size="xl" hide-footer hide-header
		         body-class="body-class"
		         :title="movie.title">
			<my-video
					v-if="movie.url"
					:url="movie.url"
					:poster="movie.poster"></my-video>
		</b-modal>


	</div>
</template>

<script>
	import MyVideo from "@/components/ui/MyVideo";
	export default {
		name: "Home",
		components: {MyVideo},
		data: ()=>({
			movie:{
				url: null,
				poster: null,
				title: null
			},
			movies: [
				{
					title: "Bad Boys-3",
					url: '/api/file/show-file/bad-boys-3.mp4',
					poster: '/api/file/show-file/bad-boys-3.jpg'
				},
				{
					title: "Rápido y Furioso",
					url: '/api/file/show-file/fast-and-furious.mp4',
					poster: '/api/file/show-file/fast-and-furious.jpg'
				},
				{
					title: "Rápido y Furioso",
					url: '/api/file/show-file/jurassic-world-2.mp4',
					poster: '/api/file/show-file/jurassic-world-2.jpg'
				},
				{
					title: "Rápido y Furioso",
					url: '/api/file/show-file/La-casa-de-papel.mp4',
					poster: '/api/file/show-file/La-casa-de-papel.jpg'
				},
				{
					title: "Rápido y Furioso",
					url: '/api/file/show-file/rescate.mp4',
					poster: '/api/file/show-file/rescate.jpg'
				},

			]
		}),
		methods:{
			setVideo(item){
				this.movie =item;
			}
		}
	}
</script>

<style >
.body-class{
 padding: 0rem;
}
	.card-img{
		height: 200px !important;
	}
</style>