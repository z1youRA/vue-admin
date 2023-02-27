import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginPage from '../views/login/LoginPage.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginPage.vue'),
    // component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
