<template>
  <TheHeader page-title="Bright"></TheHeader>
  <main class="container">
    <router-view></router-view>
  </main>
  <TheFooter page-title="Bright"></TheFooter>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import TheFooter from './components/layout/TheFooter'
import './assets/styles/custom.scss'
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
