import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Router and routes
import {routes} from "@/routes/routes";

const router = new VueRouter({
	mode: "history",
	base: __dirname,
	linkActiveClass: "active",
	routes: routes,
	linkExactActiveClass: "active", // active class for *exact* links.
	history: true,
	saveScrollPosition: false,
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0};
	}
});
export default router;