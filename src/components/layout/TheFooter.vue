<template>
  <footer>
    <div>
      <h3>Bright @ {{ currentYear }}</h3>
    </div>
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

<style></style>
