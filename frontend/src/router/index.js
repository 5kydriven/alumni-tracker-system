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
      path: '/survey',
      name: 'userpage',
      component: () => import('@/views/AlumniView.vue'),
      children: [
        {
          path: '',
          name: 'userpage',
          component: () => import('../pages/UserPage.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'adminDashboard',
          component: () => import('../pages/AdminDashboard.vue')
        },
        {
          path: '/alumni-list',
          name: 'alumni',
          component: () => import('../pages/AlumniPage.vue')
        },
      ]
    },
    {
      path: '/superAdmin',
      name: 'superAdmin',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'superAdminDashboard',
          component: () => import('../pages/SuperAdminDashb.vue'),
        },
        {
          path: '/admin-list',
          name: 'admin-list',
          component: () => import('../pages/AdminPage.vue'),
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
