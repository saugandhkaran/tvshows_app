import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse from '../views/Browse.vue'
import Home from '../views/Home'
import Search from '../views/Search'
import ShowDetails from '../views/ShowDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/browse/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
