import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout/LayoutPage.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/UsersPage.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/CategoriesPage.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/GoodsPage.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/OrdersPage.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/ParamsPage.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/ReportsPage.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/RightsPage.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/RolesPage.vue')
      }
    ]
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
