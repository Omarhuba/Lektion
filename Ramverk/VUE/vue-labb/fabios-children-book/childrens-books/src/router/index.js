import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ReadingList from '../views/ReadingList.vue'
import SingleBook from '../views/SingleBook.vue'
import BookList from '../views/BookList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/singlebook/:id',
    name: 'SingleBook',
    component: SingleBook
  }, 
  {
    path: '/booklist',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/ReadingList',
    name: 'ReadingList',
    component: ReadingList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
