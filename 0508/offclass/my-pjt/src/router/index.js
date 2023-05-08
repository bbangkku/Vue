import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoList from "../components/TodoPage/AllTodoList.vue"
import ImportantTodoList from "../components/TodoPage/ImportantTodoList.vue"
import TodayTodoList from "../components/TodoPage/TodayTodoList.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all-todo',
    component: AllTodoList
  },
  {
    path: '/important',
    name: 'important-todo',
    component: ImportantTodoList
  },
  {
    path: '/today',
    name: 'today-todo',
    component: TodayTodoList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
