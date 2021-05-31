<template>
  <TheNavbar pageTitle="Bright"></TheNavbar>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  name: 'TheHeader',
  props: {
    pageTitle: {
      type: String,
    },
  },
  setup() {},
  components: { TheNavbar },
}
</script>
