import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Design from '../views/Design.vue'
import Solitaire from '../views/Solitaire.vue'
import Sudoku from '../views/Sudoku.vue'
import Rig from '../views/Rig.vue'
import Drawings from '../views/Drawings.vue'

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
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: Sudoku
    },
    {
      path: '/rig',
      name: 'rig',
      component: Rig
    },
    {
      path: '/drawings',
      name: 'drawings',
      component: Drawings
    },
  ]
})

export default router
