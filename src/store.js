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
    getHeroPage: state => state.heroPage,
    getUser: state => state.user,
    userHasAdminAuthority: state =>
      state.user &&
      state.user.authorities &&
      state.user.authorities.filter(auth => {
        return auth.authority === 'ADMIN'
      }).length > 0
  },
  mutations: {
    setAuthorization (state, { token }) {
      if (!token) {
        axios.defaults.headers.common = {}
        return
      }
      axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
      localStorage.setItem('jwt', token)
    },
    setUser (state, { user }) {
      localStorage.setItem('user', JSON.stringify(user))
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
    async requestHero (_, { id }) {
      let response = await axios.get(`hero/get/${id}`)
      return response.data
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
      commit('setUser', { user: response.data })
    },
    async register (_, { credentials }) {
      let response = await axios.post('auth/register', credentials)
      return response
    },
    async addHero (_, { hero }) {
      let response = null
      try {
        response = await axios.post('hero/create', hero)
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message)
        }
        throw error
      }
      return response.data
    },
    async deleteHero (_, { id }) {
      let response = null
      try {
        response = await axios.delete(`hero/delete/${id}`)
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message)
        }
        throw error
      }
      return response.data
    },
    async increaseHeroPower(_, {hero}) {
      let {id} = hero || {}
      let response = null
      try {
        response = await axios.post(`hero/increase-power/${id}`)
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message)
        }
        throw error
      }
      return response.data
    }
  }
})
