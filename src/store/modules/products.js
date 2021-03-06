import axios from 'axios'

const state = {
  all: [],
}
// getters
const getters = {
  getProducts: (state) => {
    return state.all
  },
  getProductById: (state) => (id) => {
    return state.all.find((product) => product.id === id)
  },
}

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
