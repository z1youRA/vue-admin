import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getTimeToken, isTimeTokenValid } from '@/utils/auth.js'
import store from '@/store/index.js'

const service = axios.create({
  //baseURL从环境变量中取，并在代理proxy中处理跨域同时去掉baseURL
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    if (getTimeToken()) {
      // 判断是否有TimeToken
      if (!isTimeTokenValid()) {
        //若TimeToken已经失效，登出
        store.dispatch('app/logout')
      }
    }
    //在request中插入token信息
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)
service.interceptors.response.use(
  (response) => {
    const { meta, data } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg)).catch((reason) => {
        console.log('catch: ' + reason)
      })
    }
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data)).catch((reason) => {
      console.log('catch: ' + reason)
    })
  }
)

export default service
