// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import Router from 'vue-router'
import Hello from './components/Hello'
import Recent from './components/Recent'
import Favorites from './components/Favorites.vue'
import Nearby from './components/Nearby.vue'

import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import VueQrcodeReader from 'vue-qrcode-reader';

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(Router);

Vue.use(VueQrcodeReader);

const router = new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/recent', name: 'Recent', component: Recent },
    { path: '/favorites', name: 'Favorites', component: Favorites },
    { path: '/nearby', name: 'Nearby', component: Nearby },
  ]
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

