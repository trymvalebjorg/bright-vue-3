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

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style></style>
