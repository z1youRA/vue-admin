import request from './request.js'

const getMenuList = () => {
  return request({
    url: '/menus'
  })
}

export { getMenuList }
