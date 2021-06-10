const state = {
  currentStep: {},
  currentRepair: { isActive: false },
  stepsDone: [],
  repairs: [],
}
// getters
const getters = {
  getCurrentStep: (state) => {
    return state.currentStep
  },
  getCurrentRepair: (state) => {
    return state.currentRepair
  },
  getStepsDone: (state) => {
    return state.stepsDone
  },
  getAllRepairs: (state) => {
    return state.repairs
  },
}

// actions (dispatch)
const actions = {
  setCurrentStep({ commit }, currentStep) {
    commit('setCurrentStep', currentStep)
  },
  setCurrentRepair({ commit }, currentRepair) {
    commit('setCurrentRepair', currentRepair)
  },
}

// mutations (commit)
const mutations = {
  setSteps(state, steps) {
    state.steps = steps
  },
  setCurrentStep(state, currentStep) {
    state.currentStep = currentStep
    state.currentStep.isActive = true
    console.log(`${currentStep.title} is set to current step.`)
  },
  setRepairs(state, repairs) {
    state.repairs = repairs
  },
  setCurrentRepair(state, currentRepair) {
    if (state.currentRepair == currentRepair) {
      console.log(`Current repair still is: ${currentRepair.title}.`)
    } else {
      state.currentRepair = currentRepair
      state.currentRepair.isActive = true
    }
  },
  setStepDoneUndone(state, currentStep) {
    if (!currentStep.isDone && !state.stepsDone.includes(currentStep)) {
      state.currentStep = currentStep
      state.currentStep.isDone = true
      state.stepsDone.push(currentStep)
    } else {
      state.currentStep.isDone = false
      const itemToRemoveIndex = state.stepsDone.findIndex((step) => {
        return step.id === currentStep.id
      })
      if (itemToRemoveIndex !== -1) {
        state.stepsDone.splice(itemToRemoveIndex, 1)
      }
    }
  },
  setStepDoneNext(state, currentStep) {
    state.currentStep = currentStep
    state.currentStep.isDone = true
    if (!state.stepsDone.includes(currentStep)) {
      state.stepsDone.push(currentStep)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
