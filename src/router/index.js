import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import adminView from '@/views/adminView.vue'

const router = createRouter({
  history: createWebHistory('/week5homework/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: adminView
    }
  ]
})

export default router
