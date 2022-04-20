import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '../views/Characters.vue'
import About from '../views/About.vue'
import Api from '../views/Api.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CHARACTERS',
    component: Characters
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
