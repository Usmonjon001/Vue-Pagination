import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    usersdb: [],
    paginationCount: 4,
    paginationPageNumber: 1,
    searchFilterDB: []
  },
  getters: {
  },
  mutations: {
    setUser: (state, payload) => {
      state.usersdb = payload
    },
    setPaginationNum: (state, payload) => {
      state.paginationPageNumber = payload
    },
    searchFilter: (state, payload) =>{
      state.searchFilterText = payload
    },
    setNewDb: (state, payload) => {
      state.searchFilterDB = payload
    }
  },
  actions: {
    getUserDb: async ({commit}) => {
       return await axios.get('http://localhost:3000/users').then((response) => {
        commit('setUser', response.data)
      })
    }
  },
  modules: {
  }
})
