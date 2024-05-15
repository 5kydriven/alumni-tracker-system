import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/admin',
      name: 'subAdmin',
      component: () => import('../views/SubAdminView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../pages/DashboardPage.vue')
        },
        {
          path: '/alumni',
          name: 'alumni',
          component: () => import('../pages/AlumniPage.vue')
        },
      ]
    },
  ]
})

export default router
