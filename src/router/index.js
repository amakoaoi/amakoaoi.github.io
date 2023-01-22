import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Design from '../views/Design.vue'
import Solitaire from '../views/Solitaire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/solitaire',
      name: 'solitaire',
      component: Solitaire
    }
  ]
})

export default router
