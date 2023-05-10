import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound404 from '@/views/NotFound404.vue'
import DogView from '@/views/DogView.vue'

Vue.use(VueRouter)
const isLoggedIn = true

const routes = [    // 위에서부터 내려가면서 찾음
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    // 2. 라우터 가드
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('이미 로그인 함')
        next({
          name: 'home'
        })
      } else {
        next()    // 로그인이 안 되어 있다면, 로그인 페이지로 이동
      }
    }
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView
  },
  {   // 맨 아래에 써야 함
    path: '*',    // 위쪽에 설정한 경로들에 해당하지 않으면
    redirect: '/404',   // NotFound404로
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// 1. 전역 가드
// router.beforeEach((to, from, next) => {
//   // CODE HERE
//   // console.log('to', to)
//   // console.log('from', from)
//   // console.log('next', next)
//   // // next를 안써주면 기본적으로 페이지 이동을 막음
//   // next()

//   // 로그인 여부
//   const isLoggedIn = true   // 로그인 됨
//   // const isLoggedIn = false   // 로그인 안됨
  
  
//   // 로그인이 필요한 페이지 지정
//   // const authPages = ['hello', 'about', 'home']

//   // 로그인이 필요없는 페이지 지정
//   const allowAuthPages = ['login']
  
  
//   // 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
//   // const isAuthRequired = authPages.includes(to.name)

//   // 로그인 안 해도 되는 페이지에 없다면
//   const isAuthRequired = !allowAuthPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {    // 로그인이 필요한 페이지인데 안 되어 있다면
//     // 로그인 안 된 상태로 'hello' 페이지로 가려고 하면 'Login으로 이동'과 'to로 이동!'이 모두 나옴
//     // router.beforeEach는 전역가드
//     // hello 다음으로 이동하게 될 login 페이지도 확인 과정을 거치게 됨
//     console.log('Login으로 이동')
//     next({
//       name: 'login'
//     })
//   } else {
//     console.log('to로 이동!')
//     next()
//     // next는 한번만. 여러번 쓰면 에러.
//   }
// })
export default router