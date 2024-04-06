import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '@/views/SigninPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import HomePage from '@/views/HomePage.vue'
import SubAdminPage from '@/views/SubAdminPage.vue'
import Dashboard from '@/components/SubAdmin/Dashboard.vue'
import AlumniPage from '@/components/SubAdmin/AlumniPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninPage
    },
    {
      path: '/subadmin',
      name: 'subadmin',
      component: SubAdminPage,
      children: [
        {
          path: '',
          name: 'subadmin-child',
          component: Dashboard
        },
        {
          path: 'alumni',
          name: 'alumni',
          component: AlumniPage
        },
      ]
    }
  ]
})

export default router
