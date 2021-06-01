<template>
  <section class="py-3 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Smart Manual</h1>
        <p class="lead text-muted">
          Vi i BRIGHT jobber tett med FNs bærekraftsmål, og derfor er produktene våre reparerbare og kan gjenvinnes.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="row mb-5" v-for="(product, i) in productsList" :key="i">
      <div class="col-lg-2">
        <div class="row">
          <h3>{{ product.name }}</h3>
          <img :src="`https://bright-web-api.azurewebsites.net/Images/products/${product.image}`" class="img-fluid d-none d-lg-block" alt="Picture of {{ product.name }}" />
        </div>
      </div>
      <vue-horizontal responsive class="col-lg-10 p-0">
        <RepairList :productId="product.id"></RepairList>
      </vue-horizontal>
    </div>
  </section>
</template>

<script>
import RepairList from '../components/RepairList.vue'
import VueHorizontal from 'vue-horizontal'

import { reactive, toRefs } from 'vue'
import axios from 'axios'

export default {
  components: { RepairList, VueHorizontal },
  setup() {
    const products = reactive({ productsList: [] })

    axios('https://bright-web-api.azurewebsites.net/api/Products/get-all-products').then((response) => {
      products.productsList = response.data
    })

    return { ...toRefs(products) }
  },
}
</script>

<style></style>
