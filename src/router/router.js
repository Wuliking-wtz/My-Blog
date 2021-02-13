import Vue from 'vue'
import Router from 'vue-router'

const ReceptionMainPage = () => import("views/reception/MainPage")


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ReceptionMainPage
  }
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
