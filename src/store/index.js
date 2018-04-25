import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'

Vue.use(Vuex)

export const state = {
  test: 'hello'
}
export const getters = {}
export const mutations = {}
export const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    blog
  }
})
