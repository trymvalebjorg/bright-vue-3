<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="col-3"></div>
    <div class="col-2 d-flex justify-content-center align-items-center">
      <BIconCheck :height="200" :width="200" class="col-6 text-success fs-1" />
    </div>

    <div class="col-3">
      <div class="col fs-3 text">
        Thank you
      </div>

      <div class="fs-5 text mt-1">
        Your report has been submitted
      </div>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import { BIconCheck } from 'bootstrap-icons-vue'
export default {
  components: { BIconCheck },
  props: {
    // ...
  },
  // ...
}
</script>

<style scoped>
.container {
  height: calc(100vh - 80px);
}
</style>
