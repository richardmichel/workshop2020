<template>
	<main>
		<my-nav-bar/>
		<my-carousel></my-carousel>
		<section role="main"
		         id="wrapper"
		         class="py-10 container">
			<router-view/>
		</section>
		<my-footer></my-footer>
	</main>
</template>
<script>

	import {utilMix} from '@/mixins/utils';

	import MyNavBar from '@/components/layout/partials/MyNavBar';
	import MyCarousel from '@/pages/Home/partials/MyCarousel';
	const MyFooter = _ => import(/* webpackChunkName: "js/split/MyFooter"*/ '@/components/layout/partials/MyFooter');

	export default {
		name: "Layout",
		mixins: [utilMix],
		components: {
			MyNavBar,
			MyFooter,
			MyCarousel
		}
	}
</script>

<style>

</style>
