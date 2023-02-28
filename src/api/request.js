import axios from 'axios'
const service = axios.create({
    //baseURL从环境变量中取，并在代理proxy中处理跨域同时去掉baseURL
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

export default service
