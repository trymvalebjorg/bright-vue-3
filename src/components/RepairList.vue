<template>
  <RepairItem class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3" v-for="(repair, i) in repairsList" :key="i" :id="repair.id" :title="repair.title" :description="repair.description" :image="repair.image" :difficulty="repair.difficulty" :time="repair.time" />
</template>

<script>
import RepairItem from './RepairItem.vue'
import { reactive, toRefs, toRef } from 'vue'
import axios from 'axios'

export default {
  components: { RepairItem },
  setup(props) {
    const repairs = reactive({ repairsList: [] })

    const productId = toRef(props, 'productId')

    axios(`https://bright-web-api.azurewebsites.net/api/Repairs/get-repairs-by-product-id/${productId.value}`).then((response) => {
      repairs.repairsList = response.data
    })

    return { ...toRefs(repairs) }
  },
  props: {
    productId: Number,
  },
}
</script>
