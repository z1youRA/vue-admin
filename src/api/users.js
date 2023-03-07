import request from './request.js'

export const getUser = (params) => {
  const res = request({
    url: '/users',
    params
  })
  return res
}
