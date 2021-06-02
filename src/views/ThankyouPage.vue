<template>
<div class="container">
  <div class="row d-flex justify-content-center ">
    <BIconCheck class="col-4 text-success fs-1 text" />
    <div class="col-7" >
        <div class="row">
            <div class="col fs-3 text">
                Thank you
            </div>
        </div>

        <div class="row">
            <div class="col fs-5 text mt-1">
                Your report has been submitted
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>

import { BIconCheck } from 'bootstrap-icons-vue'
export default {
  components: {BIconCheck},
  props: {
    // ...
  }
  // ...
}
</script>

<style>

.thankYouP{
    display: flex;

}

</style>