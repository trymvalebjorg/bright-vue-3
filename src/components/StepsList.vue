<template>
  <div class="list-group-flush">
    <button v-for="(step, i) in stepsList" :key="i" type="button" class="list-group-item list-group-item-action" aria-current="true" @click="stepClicked(step.id)">
      <BIconCircle />
      <p>{{ step.title }}</p>
    </button>
  </div>
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
