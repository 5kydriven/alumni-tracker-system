import { createRouter, createWebHistory } from 'vue-router'
import SigninPage from '@/views/SigninPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import HomePage from '@/views/HomePage.vue'
import test from '@/views/Test.vue'

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
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})

export default router
