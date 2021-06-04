<template>
  <div></div>
  <RepairItem class="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3" v-for="repair in repairs" :key="repair.id" :id="repair.id" :title="repair.title" :description="repair.description" :image="repair.image" :difficulty="repair.difficulty" :time="repair.time" />
</template>

<script>
import RepairItem from './RepairItem.vue'
import { computed, toRef } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { RepairItem },
  setup(props) {
    const store = useStore()
    const productId = toRef(props, 'productId')
    const repairs = computed(() => store.getters['repairs/getRepairsByProductId'](productId.value))

    return { repairs }
  },
  props: {
    productId: Number,
  },
}
</script>
