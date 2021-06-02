<template>
  <div class="container">
    <div class="row">
      <h3>Make a Report</h3>
    </div>
    <div class="row reportIntro">
      <h6>We need data! Select your product, then add parts replaced and if you have repaired one of the parts add that last. Click ‘send report’ and that’s it! Thank you for helping us accomplishing this.</h6>
    </div>
  </div>
  <div class="container productsContainer">
    <div class="row">
      <div><h4>Select product:</h4></div>
    </div>
    <div class="row">
      <div class="col product">
        <img src="@/assets/img/BrightSunbell.png" alt="Sunbell" class="productImg" />
      </div>
      <div class="col product">
        <img src="@/assets/img/BrightSunturtle.png" alt="Sunturtle" class="productImg" />
      </div>
      <div class="col product">
        <img src="@/assets/img/BrightMove.png" alt="Move Smart" class="productImg" />
      </div>
      <div class="col product">
        <img src="@/assets/img/BrightStart.png" alt="Start" class="productImg" />
      </div>
    </div>
    <div class="row">
      <div class="col">Sunbell Smart</div>
      <div class="col">Sunturtle</div>
      <div class="col">Move Smart</div>
      <div class="col">Start Smart</div>
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

    <br />

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

  <br />

  <router-link to="/" class="btn btn-primary rounded-pill ps-4 report-btn">Send report <BIconArrowRightCircle width="2rem" height="1.5rem"/></router-link>
</template>

<script>
import { BIconArrowRightCircle, /* BIconBatteryCharging, BIconCpuFill, BIconBezier2, BIconTextarea, BIconArchiveFill, BIconPower, BIconDisplayFill, BIconLightbulbFill */ } from 'bootstrap-icons-vue'

export default {
  components: {
    BIconArrowRightCircle,
<<<<<<< HEAD
  },
=======
    //BIconBatteryCharging,
    //BIconCpuFill,
    //BIconBezier2,
    //BIconTextarea,
    //BIconArchiveFill,
    //BIconPower,
    //BIconDisplayFill,
    //BIconLightbulbFill
  }
>>>>>>> origin/johann_branch
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';
.report-btn {
  color: white;
  border: 0px;
}

.report-btn:hover {
  color: $success;
  background-color: $primary;
}

.product {
  width: auto;
  height: auto;
  padding: 0px;
}

.productImg {
  width: 10rem;
  height: auto;
}

.reportIntro,
.productsContainer {
  margin-bottom: 3rem;
}
</style>
