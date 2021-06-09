import axios from 'axios'

const state = {
  replacedParts: [],
  repairedParts: [],
  reports: [],
}

// getters
const getters = {
  getReplacedParts: (state) => {
    return state.replacedParts
  },
  getRepairedParts: (state) => {
    return state.repairedParts
  },
}

// mutations
const mutations = {
  setReplacedParts(state, parts) {
    state.replacedParts = parts
  },
  setRepairedParts(state, parts) {
    state.repairedParts = parts
  },
  setReports(state, reports) {
    state.reports = reports
  },
}

// actions (dispatch)
const actions = {
  getReplacedParts({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/replacedparts/get-all-parts').then((response) => {
      commit('setReplacedParts', response.data)
    })
  },
  getRepairedParts({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/repairedparts/get-all-parts').then((response) => {
      commit('setRepairedParts', response.data)
    })
  },
  getReports({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/reports/get-all-reports').then((response) => {
      commit('setReports', response.data)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
