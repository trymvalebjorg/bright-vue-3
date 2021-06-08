<template>
  <main class="container mb-5">
    <section class="py-3">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 ">
          <h1 class="fw-light">Make a report</h1>
          <p class="lead text-muted">
            We need data! Select your product, then add parts replaced and if you have repaired one of the parts add that last. Click ‘send report’ and that’s it! Thank you for helping us out.
          </p>
        </div>
      </div>
    </section>

    <section class="row mb-5">
      <div class="row mb-2">
        <h2 class="text-primary">1. Select product</h2>
      </div>
      <div class="col" v-for="(product, i) in products" :key="i">
        <div>
          <label class="row d-flex align-items-center justify-content-center">
            <input type="radio" name="product" :value="`${product.name}`" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/products/${product.image}`" class="product-img d-none d-lg-flex p-0 m-0 align-middle" alt="Picture of {{ product.name }}" />
            <h4 class="text-center">{{ product.name }}</h4>
          </label>
        </div>
      </div>
    </section>
    <section class="col-12 mb-5">
      <div class="row">
        <div class="row mb-2">
          <h2 class="text-primary">2. Select replaced part</h2>
        </div>
        <div class="row mb-2">
          <label v-for="replacedPart in replacedParts" :key="replacedPart.id" class="d-flex flex-column w-25 align-items-center justify-content-center">
            <input type="checkbox" name="replacedPart" :value="`${replacedPart.name}`" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/parts/${replacedPart.image}`" class="p-0 m-0 part" alt="Icon of {{ replacedPart.name }}" />
            <h6 class="d-inline-block mt-2 text-center">{{ replacedPart.name }}</h6>
          </label>
        </div>
      </div>
    </section>

    <section class="col-12 mb-5">
      <div class="row">
        <div class="row mb-2">
          <h2 class="text-primary">3. Select repaired part</h2>
        </div>
        <div class="row mb-2">
          <label v-for="repairedPart in repairedParts" :key="repairedPart.id" class="d-flex flex-column w-25 align-items-center justify-content-center">
            <input type="checkbox" name="repairedPart" :value="`${repairedPart.name}`" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/parts/${repairedPart.image}`" class="p-0 m-0 part" alt="Icon of {{ repairedPart.name }}" />
            <h6 class="d-inline-block mt-2 text-center">{{ repairedPart.name }}</h6>
          </label>
        </div>
      </div>
    </section>

    <router-link to="/" class="btn btn-primary">Send report</router-link>
  </main>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {},
  setup() {
    const store = useStore()
    const products = computed(() => store.getters['products/getProducts'])
    const replacedParts = computed(() => store.getters['report/getReplacedParts'])
    const repairedParts = computed(() => store.getters['report/getRepairedParts'])
    console.log(replacedParts)
    return { products, replacedParts, repairedParts }
  },
}
</script>

<style scoped>
.part {
  width: 50px;
  height: 50px;
}

.part input:checked {
  opacity: 1;
}

.part-div input:checked {
  opacity: 1;
}

.part {
  opacity: 0.2;
}

.part-div {
  opacity: 0.2;
}

.product-img input:checked {
  opacity: 1;
}

.product-img {
  opacity: 0.2;
}

input[type='radio']:checked + .product-img {
  opacity: 1;
}

input[type='checkbox']:checked + .part {
  opacity: 1;
}

input[type='radio'] {
  opacity: 0;
}

input[type='checkbox'] {
  opacity: 0;
}
</style>
