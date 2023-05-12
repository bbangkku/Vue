import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LaterView from '../views/LaterView.vue'
import SearchView from '../views/SearchView.vue'
import DetailView from '../views/DetailView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/later',
    name: 'later',
    component: LaterView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/videos/:videoId',
    name: 'DetailView',
    component: DetailView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
