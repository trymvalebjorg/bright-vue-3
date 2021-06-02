<template>
  <div>
    <h3>Report</h3>
  </div>
  <router-link to="/" class="btn btn-primary rounded-pill ps-4 report-btn">Send report <BIconArrowRightCircle width="2rem" height="1.5rem"/></router-link>
</template>

<script>
import { BIconArrowRightCircle } from 'bootstrap-icons-vue'
export default {
  components: {
    BIconArrowRightCircle,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';
.report-btn {
  color: white;
  border: 0px;
}

.report-btn:hover {
  color: $success;
  background-color: $primary;
}
</style>
