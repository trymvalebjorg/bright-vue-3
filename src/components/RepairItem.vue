<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img :src="`https://bright-web-api.azurewebsites.net/Images/${image}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepairItem',
  props: {
    title: String,
    description: String,
    image: String,
    difficulty: Number,
    time: Number,
  },
  setup() {},
}
</script>

<style></style>
