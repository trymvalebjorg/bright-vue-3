<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center notfound">
      <h1>Whoops! Something went wrong. Go back <router-link class="text-none" to="/">home!</router-link></h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.notfound {
  height: calc(100vh - 80px);
}
</style>
