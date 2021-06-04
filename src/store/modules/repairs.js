import axios from 'axios'

const state = {
  repairs: [],
  steps: [],
  tools: [],
}
// getters
const getters = {
  getRepairs: (state) => {
    return state.repairs
  },
  getRepairById: (state) => (id) => {
    return state.repairs.find((repair) => repair.id === id)
  },
  getRepairsByProductId: (state) => (id) => {
    return state.repairs.filter((repairs) => repairs.productId === id)
  },
}

// actions (dispatch)
const actions = {
  getAllRepairs({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/Repairs/get-all-repairs/').then((response) => {
      commit('setRepairs', response.data)
    })
  },
}

// mutations
const mutations = {
  setRepairs(state, repairs) {
    state.repairs = repairs
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
