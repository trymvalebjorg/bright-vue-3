<template>
  <div class="row py-lg-5">
      <h1 class="fw-light text-center">E-Learning</h1>
  </div>
  <div class="container">
      <video-player></video-player>
      <div class="content">
      <course-content></course-content>
      </div>
  </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'
import CourseContent from  '../components/CourseContent.vue'
export default {
  components: { VideoPlayer, CourseContent },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: (2, 100px);
}

.content {
    margin-left: 40%;
}
</style>