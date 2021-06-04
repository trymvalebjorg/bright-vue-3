<template>
  <main class="container">
    <div class="list-group-flush">
      <button v-for="(step, i) in stepsList" :key="i" type="button" class="list-group-item list-group-item-action d-flex align-items-center" aria-current="true" @click="stepClicked(step.id)">
        <BIconCircle class="me-3" />
        <p class="m-0">{{ step.title }}</p>
      </button>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { reactive, toRefs, toRef } from 'vue'
import { BIconCircle } from 'bootstrap-icons-vue'
export default {
  props: {
    repairId: Number,
  },
  components: {
    BIconCircle,
  },
  setup(props, context) {
    const steps = reactive({ stepsList: [] })
    const repairId = toRef(props, 'repairId')

    axios(`https://bright-web-api.azurewebsites.net/api/Steps/get-steps-by-repair-id/${repairId.value}`).then((response) => {
      steps.stepsList = response.data
    })

    function stepClicked(id) {
      context.emit('stepClicked', id)
    }

    return { ...toRefs(steps), stepClicked }
  },
}
</script>

<style></style>
