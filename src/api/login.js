import request from './request'

//调用request向后端发送登录表单数据data，url会加上baseURL, 返回response
export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
