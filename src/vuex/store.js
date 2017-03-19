import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  menuCollapsed: false
}

const mutations = {
  sidebarToggle (state) {
    state.menuCollapsed = !state.menuCollapsed
  }
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
