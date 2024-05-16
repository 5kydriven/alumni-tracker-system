import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: AuthView,
    },
    {
      path: '/superAdmin',
      name: 'superAdmin',
      component: () => import('../views/SuperAdminView.vue'),
      children: [
        {
          path: '',
          name: 'superAdminDashboard',
          component: () => import('../pages/superAdmin/SAdminDashboard.vue'),
        },
        {
          path: '/admin-list',
          name: 'adminPage',
          component: () => import('../pages/superAdmin/AdminPage.vue'),
        },
      ]
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
    {
      path: '/test',
      name: 'test',
      component: () => import('../pages/TestPage.vue')
    },
  ]
})

export default router
