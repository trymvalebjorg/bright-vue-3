<template>
  <repair-item v-for="(repair, i) in repairsList" :key="i" :title="repair.title" :description="repair.description" :image="repair.image" :difficulty="repair.difficulty" :time="repair.time"></repair-item>
</template>

<script>
import RepairItem from './RepairItem.vue'
import { reactive, toRefs } from 'vue'
import axios from 'axios'

export default {
  components: { RepairItem },
  setup() {
    const repairs = reactive({ repairsList: [] })

    axios('https://bright-web-api.azurewebsites.net/api/Repairs/get-all-repairs').then((response) => {
      repairs.repairsList = response.data
    })

    return { ...toRefs(repairs) }
  },
}
</script>
