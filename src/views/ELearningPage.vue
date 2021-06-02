<template>
  <div class="row py-lg-5">
    <h1 class="fw-light text-center">E-Learning</h1>
  </div>
  <div class="row">
    <div class="col-8">
      <VuePlyr v-if="step.video && !step.image" class="img-fluid">
        <video controls playsinline>
          <source :src="`https://bright-web-api.azurewebsites.net/Videos/${step.video}`" type="video/mp4" />
        </video>
      </VuePlyr>

      <div v-if="step.image && !step.video">
        <img :src="`https://bright-web-api.azurewebsites.net/Images/${step.image}`" class="img-fluid" :alt="`Image of ${step.title}`" />
      </div>
    </div>
    <div class="col">
      <CourseContent v-for="(repair, i) in repairsList" :key="i" :title="repair.title" :count="i" :id="repair.id" @stepClicked="showMedia" />
    </div>
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

    // Steps
    const step = reactive({ step: {} })

    axios(`https://bright-web-api.azurewebsites.net/api/Steps/get-step-by-id/12`).then((response) => {
      step.step = response.data
    })

    // Functions
    function showMedia(id) {
      axios(`https://bright-web-api.azurewebsites.net/api/Steps/get-step-by-id/${id}`).then((response) => {
        step.step = response.data
      })
      console.log(step)
    }

    return { ...toRefs(repairs), ...toRefs(step), showMedia }
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
