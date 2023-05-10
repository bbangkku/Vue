import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    // 해당 라우터에서만 특수하게 쓰는 경우
    // 프로필 뷰는 로그인된
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn){
        alert('이미 로그인됨!')
        next({name:'home'})
      }
      next()
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 공통적으로 많이 쓰이는 Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn
  // 로그인이 필요한 페이지 목록
  const loginRequired = ['profile']
  if (loginRequired.includes(to.name) && !isLoggedIn) {
    alert('로그인이 필요한 서비스입니다!')
    next({name:'login'})
  }
  next()
})

export default router
