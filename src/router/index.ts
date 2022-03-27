import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Favorites from '../components/Favorites.vue'
import Search from '../components/Search.vue'

const routes = [
  {
    path: '/:page?',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites:page?',
    name: 'Favorites',
    component: Favorites,
    props: true
  },
  {
    path: '/search/:term?/:page?',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router