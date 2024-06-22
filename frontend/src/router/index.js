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
          path: '/registrar/alumni-list',
          name: 'dashboard',
          component: () => import('@/pages/registrar/Overview.vue')
        },
        {
          path: '',
          name: 'alumni-list',
          component: () => import('@/pages/registrar/AlumniList.vue'),
        }
      ],
    },
    {
      path: '/jobseekers',
      name: 'user-home',
      component: () => import('@/pages/user/Homepage.vue'),
    },
    {
      path: '/employer',
      name: 'employer-home',
      component: () => import('@/pages/employer/index.vue'),
      children: [
        {
          path: '',
          name: 'employer-home',
          component: () => import('@/pages/employer/HomePage.vue'),
        },
        {
          path: '/employer/postjob',
          name: 'post-jobs',
          component: () => import('@/pages/employer/HomePage.vue'),
        },
      ]
    }
  ]
})

export default router
