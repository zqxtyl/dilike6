export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    getCode(state, payload) {
      state.token = payload
    },
    getUserInfo(state, payload) {
      state.userInfo = payload
    },
    removeToken(state){
      state.token=null
    }
  },
  actions: {
    getCode(context, payload) {
      context.commit('getCode', payload)
    },
    getUserInfo(context, payload) {
      context.commit('getUserInfo', payload)
    },
    removeToken(context){
      context.commit('removeToken')
    }
  }
}
