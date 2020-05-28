<template>
	<div>
		<h5>{{title}}</h5>
		<b-row cols="1" cols-sm="3" cols-md="4" cols-lg="6"
		       class="box">
			<b-col v-for="(item, index) in movies" :key="index">
				<b-button v-b-modal.modal-1
				          @click="setVideo(item)"
				          class="my-play-button">
					<i class="fas fa-play fa-lg "></i>
				</b-button>
				<b-img :src="item.poster" fluid-grow class="my-img" alt="Fluid image"></b-img>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		name: "List",
		props: {
			title: {
				required: true
			},
			movies: {
				required: true,
				type: Array

			},
			setVideo: {
				required: true,
				type:Function
			}

		}
	}
</script>

<style scoped>

</style>