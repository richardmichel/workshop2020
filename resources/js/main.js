// Vue, Vuex, Router and Axios
import '@babel/polyfill'
import 'intersection-observer' // Optional
import Vue from "vue"
import Vuex from 'vuex'
import VueRouter from "vue-router"

import axios from 'axios'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import BootstrapVue from 'bootstrap-vue'

// Font Awesome Icons
require('@fortawesome/fontawesome-free/css/all.min.css');

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);


import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */);


