import { createStore, createLogger } from 'vuex'
import VuexPersist from 'vuex-persist'
import products from './modules/products'
import repairs from './modules/repairs'
import elearning from './modules/elearning'
import report from './modules/report'

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
})

export default createStore({
  modules: {
    products,
    repairs,
    elearning,
    report,
  },
  plugins: [createLogger(), vuexLocal.plugin],
})
