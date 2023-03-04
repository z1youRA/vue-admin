export default {
  //获取Token的getter
  getToken: (state) => {
    return state.app.token
  },
  getSidebarStatus: (state) => {
    return state.app.sidebarStatus
  }
}
