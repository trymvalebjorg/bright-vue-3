<template>
  <div class="accordion" id="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`heading${id}`">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" :aria-controls="`collapse${id}`">Section {{ count + 1 }}: {{ title }}</button>
      </h2>
      <div :id="`collapse${id}`" class="accordion-collapse collapse" :aria-labelledby="`heading${id}`" data-bs-parent="#accordion">
        <div class="accordion-body px-0">
          <StepsList :repairId="id" v-bind="$attrs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepsList from './StepsList'
export default {
  props: {
    id: Number,
    count: Number,
    title: String,
  },
  setup() {},
  components: { StepsList },
}
</script>

<style scoped>
.btn {
  margin: 20px;
  padding: 30px;
  width: 320px;
}
</style>
