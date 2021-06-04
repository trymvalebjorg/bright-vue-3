import { createStore } from 'vuex'
import products from './modules/products'
import repairs from './modules/repairs'

export default createStore({
  modules: {
    products,
    repairs,
  },
})
