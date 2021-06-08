<template>
  <main class="container">
    <div class="row py-5">
      <section class="col-8">
        <div class="row mb-3">
          <h2>{{ currentStep.title }}</h2>
          <p>{{ currentStep.description }}</p>
        </div>
        <div v-if="currentStep.video">
          <VuePlyr @ended="nextClicked">
            <video controls playsinline>
              <source :src="`https://bright-web-api.azurewebsites.net/videos/${currentStep.video}`" type="video/mp4" />
            </video>
          </VuePlyr>
        </div>
        <div v-else-if="currentStep.image && !currentStep.video">
          <img :src="`https://bright-web-api.azurewebsites.net/images/${currentStep.image}`" class="img-fluid" :alt="`Image of `" />
        </div>
        <nav class="my-3" aria-label="Navigation">
          <ul class="pagination pagination-lg justify-content-between">
            <li class="page-item">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click="previousClicked">Previous</a>
            </li>

            <li class="page-item">
              <button class="page-link" href="#" @click="nextClicked(currentStep)">Next</button>
            </li>
          </ul>
        </nav>
      </section>

      <aside class="col">
        <section>
          <h3>Course Content:</h3>
          <div class="progress my-3" style="height: 20px">
            <div class="progress-bar progress-bar-striped" :style="{ width: (stepsDone.length / steps.length) * 100 + '%' }" role="progressbar" :aria-valuenow="stepsDone.length" aria-valuemin="0" :aria-valuemax="steps.length">
              <p class="m-0" v-if="stepsDone.length > 0">{{ stepsDone.length }} / {{ steps.length }}</p>
            </div>
          </div>
        </section>

        <section class="accordion" id="accordion">
          <div v-for="(repair, i) in repairs" :key="i" class="">
            <h2 class="accordion-header" :id="`heading${repair.id}`">
              <button class="accordion-button collapsed-show" :class="{ collapsed: !repair.stepIds.includes(currentStep.id) }" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${repair.id}`" aria-expanded="false" :aria-controls="`collapse${repair.id}`">
                <div class="col">
                  <div class="row ">
                    <div class="col-8">
                      <h6 class="m-0">Section {{ i + 1 }}:</h6>
                      <p class="m-0">{{ repair.title }}</p>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                      <p class="m-0">
                        <span>{{ repair.stepsDone.length }}</span>

                        / {{ repair.stepIds.length }}
                      </p>
                    </div>
                  </div>
                  <div class=""></div>
                </div>
              </button>
            </h2>
            <div :id="`collapse${repair.id}`" class="accordion-collapse " :class="{ collapse: !repair.stepIds.includes(currentStep.id) }" :aria-labelledby="`heading${repair.id}`">
              <div class="accordion-body p-0">
                <StepsList :repairId="repair.id" @stepClicked="setCurrentStep" @checkClicked="completeStep" />
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </main>
</template>

<script>
// import VideoPlayer from '../components/VideoPlayer.vue'
import VuePlyr from 'vue-plyr'
import StepsList from '../components/StepsList.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { VuePlyr, StepsList },
  setup() {
    // Declare store & router
    const store = useStore()
    const router = useRouter()

    const repairId = 1
    const repairs = computed(() => store.getters['repairs/getRepairsByProductId'](1))
    const stepsDone = computed(() => store.state.elearning.stepsDone)
    const currentStep = computed(() => store.state.elearning.currentStep)
    const currentRepair = computed(() => store.state.elearning.currentRepair)

    const steps = []

    // Populate steps
    for (let i = 0; i < repairs.value.length; i++) {
      let id = repairs.value[i].id
      let stepsRepair = computed(() => store.getters['repairs/getStepsByRepairId'](id))

      for (let ii = 0; ii < stepsRepair.value.length; ii++) {
        steps.push(stepsRepair.value[ii])
      }
    }

    const setCurrentStep = (step) => {
      store.dispatch('elearning/setCurrentStep', step)
      setCurrentRepair(step)
    }

    const setCurrentRepair = (step) => {
      const repair = repairs.value.find(({ id }) => id === step.repairId)
      store.dispatch('elearning/setCurrentRepair', repair)
    }

    const completeStep = (step) => {
      store.commit('elearning/setStepDoneUndone', step)
      store.commit('repairs/setStepsDoneRepair', step)
    }

    const nextClicked = () => {
      const i = steps.findIndex((step) => step.id === currentStep.value.id)
      setCurrentRepair(steps[i])
      completeStep(steps[i])

      if (i < steps.length - 1) {
        setCurrentStep(steps[i + 1])
      } //router.push?
    }

    const previousClicked = () => {
      const i = steps.findIndex((step) => step.id === currentStep.value.id)
      if (i > 0) {
        setCurrentStep(steps[i - 1])
      }
    }

    const test = () => {
      alert('video ended')
    }

    setCurrentStep(steps[0])

    return { repairs, repairId, setCurrentStep, currentStep, currentRepair, completeStep, stepsDone, steps, nextClicked, previousClicked, router, test }
  },
}
</script>

<style scoped></style>
