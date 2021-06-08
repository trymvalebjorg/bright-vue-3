import axios from 'axios'

const state = {
  repairs: [],
  steps: [],
}

// getters
const getters = {
  getRepairs: (state) => {
    return state.repairs
  },
  getRepairsByProductId: (state) => (id) => {
    return state.repairs.filter((repair) => repair.productId === id)
  },
  getRepairById: (state) => (id) => {
    return state.repairs.find((repair) => repair.id === id)
  },
  getStepsByRepairId: (state) => (id) => {
    return state.steps.filter((step) => step.repairId === id)
  },
}

// mutations
const mutations = {
  setRepairs(state, repairs) {
    state.repairs = repairs
  },
  setSteps(state, steps) {
    state.steps = steps
  },
  setStepsDoneRepair(state, step) {
    const repair = state.repairs.find((repair) => repair.id === step.repairId)
    if (!repair.stepsDone.includes(step)) {
      repair.stepsDone.push(step)
      console.log(`${step.title} added to ${repair.title}'s stepsDone array.`)
    } else {
      const stepToRemove = repair.stepsDone.findIndex((step) => {
        return step.id === step.id
      })
      repair.stepsDone.splice(stepToRemove, 1)
    }
  },
}

// actions (dispatch)
const actions = {
  getAllRepairs({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/repairs/get-all-repairs/').then((response) => {
      const repairs = []
      for (let i = 0; i < response.data.length; i++) {
        const a = response.data[i]
        const b = { isActive: false, isDone: false, stepsDone: [] }
        const repair = { ...a, ...b }
        repairs.push(repair)
      }
      commit('setRepairs', repairs)
    })
  },
  getAllSteps({ commit }) {
    axios('https://bright-web-api.azurewebsites.net/api/steps/get-all-steps').then((response) => {
      commit('setSteps', response.data)
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
