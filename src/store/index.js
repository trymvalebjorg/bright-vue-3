import { createStore, createLogger } from 'vuex'
// import VuexPersistence from 'vuex-persist'
import products from './modules/products'
import repairs from './modules/repairs'
import elearning from './modules/elearning'
import report from './modules/report'
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// })
//  vuexLocal.plugin
export default createStore({
  modules: {
    products,
    repairs,
    elearning,
    report,
  },
  plugins: [createLogger()],
})
