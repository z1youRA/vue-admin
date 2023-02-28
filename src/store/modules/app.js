import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    //参数结构，将context参数解构为context.commit
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        //调用api将userInfo打包为POST报文发送给后端
        loginApi(userInfo)
          .then((res) => {
            commit('setToken', res.token)
            //实现登录成功后跳转到主页
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
