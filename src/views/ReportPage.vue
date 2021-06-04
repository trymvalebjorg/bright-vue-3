<template>
  <main class="container">
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

    <section>
      <div class="row">
        <div class="row mb-2">
          <h2 class="text-primary">Select product</h2>
        </div>
        <div class="col" v-for="(product, i) in productsList" :key="i">
          <label class="row d-flex align-items-center">
            <input type="checkbox" name="" value="" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/products/${product.image}`" class="product-img d-none d-lg-flex p-0 m-0 align-middle" alt="Picture of {{ product.name }}" />
            <h4>{{ product.name }}</h4>
          </label>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="bg-primary container">
            <div class="row">Replaced parts:</div>
            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="bg-primary container">
            <div class="row">Repaired parts:</div>
            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>

            <div class="row">
              <div class="col">col1</div>
              <div class="col">col2</div>
              <div class="col">col3</div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/" class="btn btn-primary rounded-pill ps-4 report-btn">Send report <BIconArrowRightCircle width="2rem" height="1.5rem"/></router-link>
    </section>
  </main>
</template>
<script>
import { reactive, toRefs } from 'vue'
import axios from 'axios'
export default {
  components: {},
  setup() {
    const products = reactive({ productsList: [] })

    axios('https://bright-web-api.azurewebsites.net/api/Products/get-all-products').then((response) => {
      products.productsList = response.data
    })

    return { ...toRefs(products) }
  },
}
</script>

<style scoped>
.product-img input:checked {
  opacity: 1;
}

.product-img {
  opacity: 0.2;
}

.my-image:hover {
  background-color: green;
  fill: red;
}

input[type='checkbox']:checked + .product-img {
  opacity: 1;
}

input[type='checkbox'] {
  opacity: 0;
}
</style>
