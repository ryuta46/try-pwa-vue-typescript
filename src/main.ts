// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, {ComponentOptions} from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
} as ComponentOptions<Vue>);
