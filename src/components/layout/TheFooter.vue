<template>
  <footer></footer>
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
