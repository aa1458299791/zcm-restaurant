import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: {},
    searchList: []
  },
  getters: {},
  mutations: {
    // 定位数据
    GET_LOCATION(state, data) {
      state.location = data
    },
    // 添加搜索建议
    ADD_SEARCH_LIST(state, data) {
      state.searchList = data
    }
  },
  actions: {},
  modules: {}
})
