import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Hello from '../components/Hello.vue'
import Recent from '../components/Recent.vue'
import Favorites from '../components/Favorites.vue'
import Nearby from '../components/Nearby.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello } as RouteConfig,
    { path: '/recent', name: 'Recent', component: Recent } as RouteConfig,
    { path: '/favorites', name: 'Favorites', component: Favorites } as RouteConfig,
    { path: '/nearby', name: 'Nearby', component: Nearby } as RouteConfig,
  ]
});
