<template>
  <div class="list-group-flush">
    <div v-for="(step, i) in steps" :key="i" type="button" :class="{ 'step-active': currentStep.id === step.id }" class="list-group-item list-group-item-action d-flex align-items-center p-0">
      <div v-if="!stepsDone.includes(step)">
        <BIconCircle @click="checkClicked(step)" :width="18" :height="18" class="ms-3 me-2" />
      </div>
      <div v-else>
        <BIconCheckCircleFill @click="checkClicked(step)" :width="18" :height="18" class="ms-3 me-2 BIconCheckCircleFill" />
      </div>
      <div @click="stepClicked(step)" class="w-100 m-2">
        <p class="m-0" :class="{ 'text-decoration-line-through': stepsDone.includes(step) }">{{ step.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { toRef, computed } from 'vue'
import { BIconCircle, BIconCheckCircleFill } from 'bootstrap-icons-vue'
import { useStore } from 'vuex'
export default {
  props: {
    repairId: Number,
  },
  components: {
    BIconCircle,
    BIconCheckCircleFill,
  },
  setup(props, context) {
    const store = useStore()

    const repairId = toRef(props, 'repairId')
    const steps = computed(() => store.getters['repairs/getStepsByRepairId'](repairId.value))
    const stepsDone = computed(() => store.state.elearning.stepsDone)
    const currentStep = computed(() => store.state.elearning.currentStep)

    function stepClicked(step) {
      context.emit('stepClicked', step)
    }

    function checkClicked(step) {
      context.emit('checkClicked', step)
    }

    console.log(stepsDone.value)
    console.log(stepsDone.value.includes(stepsDone.value[0]))
    return { stepClicked, checkClicked, steps, stepsDone, currentStep }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/custom.scss';

.BIconCheckCircleFill {
  color: $primary;
}
</style>
