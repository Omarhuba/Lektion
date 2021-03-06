import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ReadingList from '../views/ReadingList.vue'
import SingleBook from '../views/SingleBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/singlebook',
    name: 'SingleBook',
    component: SingleBook
  },
  {
    path: '/readingList',
    name: 'ReadingList',
    component: ReadingList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
