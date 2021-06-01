<template>
  <div class="col">
    <div class="card h-100">
      <img :src="`https://bright-web-api.azurewebsites.net/Images/${image}`" class="card-img-top" height="150" :alt="`Image of ${title}`" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="card-footer d-grid">
        <router-link :to="{ name: 'RepairPage', params: { id: id } }" class="btn btn-primary">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepairItem',
  props: {
    id: Number,
    title: String,
    description: String,
    image: String,
    difficulty: Number,
    time: Number,
  },
  setup() {},
}
</script>

<style scoped></style>
