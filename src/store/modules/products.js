import axios from 'axios'

const state = {
  all: [],
}
// getters
const getters = {}

// actions (dispatch)
const actions = {
  getAllProducts({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/Products/get-all-products').then((response) => {
      commit('setProducts', response.data)
    })
  },
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
