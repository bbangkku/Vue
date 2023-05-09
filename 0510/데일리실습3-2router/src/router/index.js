import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import TheLotto from '@/views/TheLotto.vue'
import TheLunch from '@/views/TheLunch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    // 지연 로딩
    // 한번에 받아오는게아니라 필요할 때마다 서버로 요청
    // 초기 로딩이 빠름
    // 서버로 추가적인 요청이 발생
    // 예시) 랭킹 시스템
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    
    // 서버로부터 한번에 다 받아옴
    // 초기 로딩이 느림
    component: AboutView
  },
  {
    path: '/lunch',
    name: 'lunch',
    component: TheLunch
  },
  {
    path: '/lotto/:count',
    // count 라는 변수를 받을거야,,
    name: 'lotto',
    component: TheLotto
  }








]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
