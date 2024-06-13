import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthPage,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/test.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('@/pages/registrar/DashboardPage.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/registrar/Overview.vue')
        },
        {
          path: '/registrar/alumni-list',
          name: 'alumni-list',
          component: () => import('@/pages/registrar/AlumniList.vue'),
        }
      ],
    },
    {
      path: '/jobseekers',
      name: 'user-home',
      component: () => import('@/pages/user/Homepage.vue'),
    }
  ]
})

export default router
