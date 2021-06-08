<template>
  <main class="container">
    <div class="row mt-4">
      <div class="col-8">
        <div class="row mb-2">
          <h2 class="text-primary">{{ repair.title }}</h2>
        </div>

        <div class="row" v-for="(step, i) in steps" :key="i">
          <div class="accordion accordion" id="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${i}`" aria-expanded="false" :aria-controls="`#collapse${i}`">
                  <p class="mb-0">
                    <b>Step {{ i + 1 }}:</b>
                    {{ step.title }}
                  </p>
                </button>
              </h2>
              <div :id="`collapse${i}`" class="accordion-collapse collapse px-2" :aria-labelledby="`heading${i}`" data-bs-parent="#accordion">
                <div class="accordion-body row" v-if="step.image">
                  <div class="col-7">
                    {{ step.description }}
                  </div>
                  <div class="col-5">
                    <img :src="`https://bright-web-api.azurewebsites.net/Images/${step.image}`" class="img-fluid" :alt="`Image of ${step.title}`" />
                  </div>
                </div>

                <div class="accordion-body row" v-else-if="step.video">
                  <div class="mb-3">
                    <VuePlyr>
                      <video controls playsinline>
                        <source :src="`https://bright-web-api.azurewebsites.net/Videos/${step.video}`" type="video/mp4" />
                      </video>
                    </VuePlyr>
                  </div>

                  <div>
                    {{ step.description }}
                  </div>
                </div>

                <div class="accordion-body" v-else>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <h4 class="mb-3">Summary</h4>

        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between align-items-center">
              <h6 class="mb-1"><BIconSpeedometer height="25" width="25" class="me-2" /> Difficulty</h6>
              <p class="m-0">{{ repair.difficulty }}</p>
            </div>
          </div>
          <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between align-items-center">
              <h6 class="mb-1"><BIconBarChartSteps height="25" width="25" class="me-2" /> Steps</h6>
              <p class="m-0">{{ steps.length }} steps</p>
            </div>
          </div>
          <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between align-items-center">
              <h6 class="mb-1"><BIconClock height="25" width="25" class="me-2" /> Time</h6>
              <p class="m-0">{{ repair.time }} min</p>
            </div>
          </div>
          <div class="d-flex w-100 justify-content-evenly row mt-4">
            <div v-for="(tool, i) in repair.tools" :key="i" class="col d-flex justify-content-center align-items-center flex-column ">
              <img :src="`https://bright-web-api.azurewebsites.net/images/tools/${tool.image}`" class="icon" :alt="`Image of ${tool.name}`" />
              <p class="mt-1">{{ tool.name }}</p>
            </div>
            <div class="row d-flex justify-content-center mt-4">
              <button class="btn btn-primary">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VuePlyr from 'vue-plyr'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { BIconSpeedometer, BIconClock, BIconBarChartSteps } from 'bootstrap-icons-vue'
export default {
  setup() {
    const repairId = parseInt(useRoute().params.id)
    const store = useStore()
    const repair = computed(() => store.getters['repairs/getRepairById'](repairId))
    const steps = computed(() => store.getters['repairs/getStepsByRepairId'](repairId))

    //TODO:
    // 1. https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh

    return { repair, steps }
  },
  components: {
    BIconSpeedometer,
    BIconBarChartSteps,
    BIconClock,
    VuePlyr,
  },
}
</script>

<style scoped>
.icon {
  width: 2rem;
  height: 2rem;
}
</style>
