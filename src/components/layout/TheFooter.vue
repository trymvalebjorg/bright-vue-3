<template>
  <footer class="d-flex justify-content-center align-items-center footer bg-light">
    <h6 class="p-0 m-0">{{ pageTitle }} <span class="text-secondary">©</span> {{ currentYear }}</h6>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    pageTitle: {
      type: String,
    },
  },
  setup() {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  },
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
}
</style>
