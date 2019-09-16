import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable */
export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    persistentTest: sessionStorage.getItem("persistentTest"),
    persist4Vuex: ''
  },
  mutations: {
    persistentTest(state, param) {
      sessionStorage.setItem("persistentTest", param)
      state.persistentTest = param
    },
    persist4Vuex (state, param) {
      state.persist4Vuex = param
    }
  },
  plugins: [
    createPersistedState({ storage: window.sessionStorage })
  ]
})
