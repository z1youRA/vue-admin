import router from '@/router'
import store from '@/store'

const whiteListForGuest = ['/login']
router.beforeEach((to) => {
  //判断用户是否登录
  const isAuthenticated = store.getters.getToken ? true : false

  if (isAuthenticated) {
    if (to.path === '/login') return { path: '/' }
    else {
      return undefined
    }
  } else {
    //注意不能直接到login，否则会重复调用导航守卫而死循环
    // FALSE: return { path: '/login' }
    if (whiteListForGuest.includes(to.path)) {
      return undefined
    } else {
      return { path: '/login' }
    }
  }
})
