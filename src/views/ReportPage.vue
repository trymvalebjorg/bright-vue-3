<template>
  <main class="container mb-5">
    <section class="py-3">
      <div class="row py-lg-3">
        <div class="col">
          <h1 class="fw-light">Report</h1>
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
            <input type="radio" name="product" :value="`${product.id}`" v-model.number="productId" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/products/${product.image}`" class="product-img d-none d-lg-flex p-0 m-0 align-middle" alt="Picture of {{ product.name }}" />
            <h4 class="text-center">{{ product.name }}</h4>
          </label>
        </div>
      </div>
    </section>

    <section class="col-12 mb-5 container">
      <div class="row">
        <div class="row mb-2">
          <h2 class="text-primary mb-5">2. Select replaced part</h2>
        </div>
        <div class="row mb-2">
          <label v-for="replacedPart in replacedParts" :key="replacedPart.id" class="d-flex flex-column w-25 align-items-center justify-content-center">
            <input type="checkbox" name="replacedPart" :value="`${replacedPart.id}`" v-model.number="replacedPartIds" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/parts/${replacedPart.image}`" class="p-0 m-0 part" alt="Icon of {{ replacedPart.name }}" />
            <h6 class="d-inline-block mt-2 text-center">{{ replacedPart.name }}</h6>
            <VueNumberInput controls size="small" center rounded :min="1" :max="10"></VueNumberInput>
          </label>
        </div>
      </div>
    </section>

    <section class="col-12 mb-5 container">
      <div class="row">
        <div class="row mb-2">
          <h2 class="text-primary mb-5">3. Select repaired part</h2>
        </div>
        <div class="row mb-2">
          <label v-for="repairedPart in repairedParts" :key="repairedPart.id" class="d-flex flex-column w-25 align-items-center justify-content-center">
            <input type="checkbox" name="repairedPart" :value="`${repairedPart.id}`" v-model.number="repairedPartIds" />
            <img :src="`https://bright-web-api.azurewebsites.net/Images/parts/${repairedPart.image}`" class="p-0 m-0 part" alt="Icon of {{ repairedPart.name }}" />
            <h6 class="d-inline-block mt-2 text-center">{{ repairedPart.name }}</h6>
            <VueNumberInput controls size="small" center rounded :min="1" :max="10"></VueNumberInput>
          </label>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center">
      <button class="btn btn-lg btn-primary mb-5" @click="sendReport">Send report</button>
    </section>
  </main>
</template>
<script>
import { computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  components: { VueNumberInput },
  setup() {
    const store = useStore()
    const router = useRouter()

    const products = computed(() => store.getters['products/getProducts'])
    const replacedParts = computed(() => store.getters['report/getReplacedParts'])
    const repairedParts = computed(() => store.getters['report/getRepairedParts'])
    const report = reactive({ userId: 0, productId: 0, replacedPartIds: [], repairedPartIds: [] })

    const sendReport = () => {
      axios
        .post('https://bright-web-api.azurewebsites.net/api/reports/add-report', report)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })

      setTimeout(() => {
        router.push('/thankyou')
      }, 1000)
    }
    return { products, replacedParts, repairedParts, ...toRefs(report), sendReport }
  },
}
</script>

<style scoped>
.part {
  width: 60px;
  height: 60px;
}

.part input:checked {
  opacity: 1;
}

.part {
  opacity: 0.2;
}
.part + h6 {
  opacity: 0.2;
}

.part + h6 + .vue-number-input {
  opacity: 0;
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

input[type='checkbox']:checked + .part + h6 {
  opacity: 1;
}

input[type='checkbox']:checked + .part + h6 + .vue-number-input {
  opacity: 1;
}

input[type='radio'] {
  opacity: 0;
}

input[type='checkbox'] {
  opacity: 0;
}
</style>
