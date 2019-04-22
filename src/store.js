import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.accept = 'application/json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    heroPage: {}
  },
  getters: {
    getHeroPage: state => state.heroPage
  },
  mutations: {
    setAuthorization (state, { token }) {
      if (!token) {
        axios.defaults.headers.common = {}
        return
      }
      axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    },
    setUser (state, { user }) {
      state.user = user
    },
    setHeroPage (state, page) {
      state.heroPage = page
    }
  },
  actions: {
    async logoff ({ commit }) {
      commit('setAuthorization', { token: null })
      commit('setUser', { user: {} })
    },
    async loadHeros ({ commit }, { page = 1 } = { page: 0 }) {
      let params = {}
      if (params > 0) {
        params.page = page
      }
      let response = await axios.get('hero/list', { params })
      commit('setHeroPage', response.data)
    },
    async login ({ commit }, { credentials }) {
      let response = await axios.post('auth/login', credentials)
      commit('setAuthorization', response.headers)
      commit('setUser', response.data)
    }
  }
})
