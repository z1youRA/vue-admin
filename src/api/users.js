import request from './request.js'

export const getUser = (params) => {
  const res = request({
    url: '/users',
    params
  })
  return res
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'put'
  })
}

export const addUser = (data) => {
  return request({
    url: 'users',
    method: 'post',
    data
  })
}
