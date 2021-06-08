<template>
  <TheHeader bright-title="Bright"></TheHeader>
  <router-view></router-view>
  <TheFooter page-title="Bright"></TheFooter>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import TheFooter from './components/layout/TheFooter'
import './assets/styles/custom.scss'
import './assets/styles/style.scss'
import 'bootstrap'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const store = useStore()
    store.dispatch('products/getAllProducts')
    store.dispatch('repairs/getAllRepairs')
    store.dispatch('repairs/getAllSteps')
    store.dispatch('report/getReplacedParts')
    store.dispatch('report/getRepairedParts')
    store.dispatch('report/getReports')
  },
}
</script>

<style></style>
