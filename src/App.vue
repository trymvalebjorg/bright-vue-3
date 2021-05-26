<template>
  <TheHeader page-title="Bright"></TheHeader>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import './assets/styles/custom.scss'
import 'bootstrap'

export default {
  name: 'App',
  components: {
    TheHeader,
  },
}
</script>

<style></style>
