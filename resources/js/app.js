require("./main");
import Vue from 'vue'
import App from "@/components/App.vue";
// Shared data using Vuex
import store from "@/store/index";
import {sync} from 'vuex-router-sync';
import router from "@/routes/index";

Vue.config.productionTip = false;
sync(store, router);

Vue.mixin({
	data: () => ({
		titleApp: 'Buenas Pelis'
	})
});
new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
});
