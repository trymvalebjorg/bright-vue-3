<template>
  <main class="container">
    <section class="py-3">
      <div class="row py-lg-3">
        <div class="col ">
          <h1 class="fw-light">Handbook</h1>
          <p class="lead text-muted">
            The perfect place to gather information about how to repair and what tools you need.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="row mb-5" v-for="(product, i) in products" :key="i">
        <div class="col-lg-3 d-flex flex-column">
          <div class="row">
            <h3>{{ product.name }}</h3>
          </div>
          <div class="row mt-4">
            <img :src="`https://bright-web-api.azurewebsites.net/Images/products/${product.image}`" class="product-img d-none d-lg-flex p-0 m-0 align-middle" alt="Picture of {{ product.name }}" />
          </div>
        </div>
        <vue-horizontal :button-between="false" responsive class="col-lg-9 p-0">
          <RepairList :productId="product.id"></RepairList>
        </vue-horizontal>
      </div>
    </section>
  </main>
</template>

<script>
import RepairList from '../components/RepairList.vue'
import VueHorizontal from 'vue-horizontal'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { RepairList, VueHorizontal },
  setup() {
    const store = useStore()
    const products = computed(() => store.state.products.all)

    return { products }
  },
}
</script>

<style>
.product-img {
  width: 12rem;
  height: 11rem;
}
</style>
