import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout/LayoutPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
