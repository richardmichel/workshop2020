<template>
	<div>
		<list :title="item.title" :movies="item.movies" :setVideo="setVideo" v-for="(item, index) in list" :key="index"/>

		<b-modal id="modal-1"
		         size="xl"
		         hide-footer
		         centered
		         header-bg-variant="dark"
		         body-class="body-class"
		         header-class="my-modal-header"
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

	//serviicios
	import {ServiceFactory} from '@/services/ServiceFactory';

	const MovieService = ServiceFactory.get('movie');

	import List from '@/pages/Home/partials/List';

	/*const arrayMovies = _ => {
		return [
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
			{
				title: "Sonic",
				url: '/api/file/show-file/sonic.mp4',
				poster: '/api/file/show-file/sonic.jpeg'
			}

		];
	};*/
	export default {
		name: "Home",
		components: {
			MyVideo,
			List
		},
		data: () => ({
			movie: {
				url: null,
				poster: null,
				title: null
			},
			/*list: [
				{
					title: "Películas Recientes",
					movies: arrayMovies()

				}, {
					title: "Películas Populares",
					movies: arrayMovies()
				}

			],*/
			list: []


		}),
		methods: {
			setVideo(item) {
				this.movie = item;
			},
			async init() {

				try {
					const response = await MovieService.getMyMovies();
					if (response && response.status == 200) {

						const {data} = response;
						this.list = data.movies;

					}else{
						this.errorF(response);
					}
				} catch (error) {
					this.errorF(error);
				}
			},
			errorF(error) {
				console.log(`service ${ error}`);
			}
		},
		created() {
			this.init();
		}
	}
</script>

<style>
	.body-class {
		padding: 0rem;
	}

	.card-img {
		height: 200px !important;
		border-radius: 0px !important;
	}

	.my-modal-header{
		background-color: #000!important;
		border: none;
	}

	.box .col {

		padding-top: .75rem;
		padding-bottom: .75rem;
		min-height: 100px;
		min-width: 180px;
	}

	.box .col:hover {
		transition: transform .3s;
		-ms-transform: scale(1.4);
		-webkit-transform: scale(1.4);
		transform: scale(1.4);
		z-index: 2;
	}

	.my-img {
		min-height: 100px;
		min-width: 180px;
	}

	.my-play-button {
		position: absolute;
		left: 45%;
		top: 30%;
		background: #0000008c !important;
		border: none;
		color: #fff;
	}

	.my-play-button:hover {
		cursor: pointer !important;
		background: rgba(0, 0, 0, 0.68) !important;

	}

</style>