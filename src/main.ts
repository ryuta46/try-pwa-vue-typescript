// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, {ComponentOptions} from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import Router, {RouteConfig} from 'vue-router'
import Hello from './components/Hello.vue'
import Recent from './components/Recent.vue'
import Favorites from './components/Favorites.vue'
import Nearby from './components/Nearby.vue'

import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import {NEMLibrary, NetworkTypes} from "nem-library";

Vue.config.productionTip = false;

Vue.use(Vuetify);
// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = '';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello } as RouteConfig,
    { path: '/recent', name: 'Recent', component: Recent } as RouteConfig,
    { path: '/favorites', name: 'Favorites', component: Favorites, props: {address: address} } as RouteConfig,
    { path: '/nearby', name: 'Nearby', component: Nearby } as RouteConfig,
  ]
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
} as ComponentOptions<Vue>);

