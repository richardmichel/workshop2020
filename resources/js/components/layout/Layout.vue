<template>
	<main>
		<my-nav-bar/>
		<section role="main"
		         id="wrapper"
		         class="py-10 container">
			<router-view/>
		</section>
	</main>
</template>
<script>

	import {utilMix} from '@/mixins/utils';

	const MyNavBar = _ => import(/* webpackChunkName: "js/split/MyNavBar"*/ '@/components/layout/partials/MyNavBar');

	export default {
		name: "Layout",
		mixins: [utilMix],
		components: {
			MyNavBar
		}
	}
</script>

<style scoped>

</style>
