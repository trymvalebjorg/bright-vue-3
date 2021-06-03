<template>
  <div class="row py-5">
    <section class="col-8">
      <div class="row mb-3">
        <h2>{{ step.repair }}</h2>
        <p>{{ step.description }}</p>
      </div>
      <div v-if="step.video">
        <VuePlyr>
          <video controls playsinline>
            <source :src="`https://bright-web-api.azurewebsites.net/videos/${step.video}`" type="video/mp4" />
          </video>
        </VuePlyr>
      </div>

      <div v-else-if="step.image && !step.video">
        <img :src="`https://bright-web-api.azurewebsites.net/images/${step.image}`" class="img-fluid" :alt="`Image of ${step.title}`" />
      </div>
    </section>
    <aside class="col">
      <CourseContent v-for="(repair, i) in repairsList" :key="i" :title="repair.title" :count="i" :id="repair.id" @stepClicked="getStep" />
    </aside>
  </div>
</template>

<script>
// import VideoPlayer from '../components/VideoPlayer.vue'
import VuePlyr from 'vue-plyr'
import CourseContent from '../components/CourseContent.vue'
import { toRefs, reactive } from 'vue'
import axios from 'axios'
export default {
  components: { CourseContent, VuePlyr },
  setup() {
    // Repairs
    const repairs = reactive({ repairsList: {} })

    axios(`https://bright-web-api.azurewebsites.net/api/Repairs/get-repairs-by-product-id/1`).then((response) => {
      repairs.repairsList = response.data
    })

    // Step
    const step = reactive({})

    if (step.id == undefined) {
      axios('https://bright-web-api.azurewebsites.net/api/steps/get-first-step').then((response) => {
        step.id = response.data.id
        step.title = response.data.title
        step.description = response.data.description
        step.image = response.data.image
        step.video = response.data.video
        step.repair = response.data.repair
        step.completed = false
        console.log(step)
      })
    }
    // Functions

    function getStep(id) {
      axios(`https://bright-web-api.azurewebsites.net/api/Steps/get-step-by-id/${id}`).then((response) => {
        step.id = response.data.id
        step.title = response.data.title
        step.description = response.data.description
        step.image = response.data.image
        step.video = response.data.video
        step.repair = response.data.repair
        step.completed = false
        console.log(step)
      })
    }

    return { ...toRefs(repairs), step, getStep }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: (2, 100px);
}

.content {
  margin-left: 10%;
}
</style>
