<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators my-2">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="homePageImg" src="../assets/img/HandbookImg1.png" alt="" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777"></rect>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Your very own digital handbook</h1>
            <p>Always have your handbook at hand when performing a repair. You can download it and have it with you anywhere.</p>
            <router-link to="/manual" class="btn btn-primary icon-btn btn-md-lg btn-md">Visit page »</router-link>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img class="homePageImg" src="../assets/img/E-learningImg1.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777"></rect>
        <div class="container">
          <div class="carousel-caption">
            <h1 class="eLearningHeader">Learn how to repair with E-learning</h1>
            <p>Want to join our community? Sign up and learn how to repair and maintain Bright smartlamps.</p>
            <router-link to="/elearning" class="btn btn-primary icon-btn btn-md-lg btn-md">Visit page »</router-link>
          </div>
        </div>
      </div>

      <div class="carousel-item active">
        <img class="homePageImg" src="../assets/img/ReportImg1.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="#777"></rect>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1 class="reportHeader">Give us data with a report</h1>
            <p>An easy and quick way to send us the data we need, after a successful repair .</p>
            <router-link to="/report" class="btn btn-primary icon-btn btn-md-lg btn-md">Visit page »</router-link>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container marketing">
    <div class="row icon-row pt-5 pb-5 gy-5 overflow-hidden">
      <div class="col-lg-4">
        <BIconBook class="bd-placeholder-img icon mb-3" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"
          ><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></BIconBook
        >
        <h2>Handbook</h2>
        <p>The perfect place to gather information about how to repair and what tools you need.</p>
        <router-link to="/handbook" class="btn btn-primary icon-btn ">View details »</router-link>
      </div>

      <div class="col-lg-4">
        <BIconPencilSquare class="bd-placeholder-img icon mb-3" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"
          ><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></BIconPencilSquare
        >
        <h2>Report</h2>
        <p>After a repair is completed, click here to make your report and send it to us.</p>
        <router-link to="/report" class="btn btn-primary icon-btn ">View details »</router-link>
      </div>

      <div class="col-lg-4">
        <BIconPlayBtn class="bd-placeholder-img icon mb-3" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"
          ><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></BIconPlayBtn
        >
        <h2>E-learning</h2>
        <p>Want to be a certified repairman? Visit our E-learning page to get your diploma.</p>
        <router-link to="/elearning" class="btn btn-primary icon-btn ">View details »</router-link>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette px-5 py-md-5">
      <div class="col-md-7">
        <h2 class="featurette-heading heading">Your own digital handbook. <span class="heading2">Use it anywhere.</span></h2>
        <p class="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto homePageImg" src="../assets/img/HandboookImg2.png" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title
        ><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette px-2 px-md-5">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading heading">Every repair ends with a report. <span class="heading2">Send it to us.</span></h2>
        <p class="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto homePageImg" src="../assets/img/ReportImg2.png" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title
        ><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette px-2 px-md-5">
      <div class="col-md-7">
        <h2 class="featurette-heading heading">We need more workers. <span class="heading2">Get your degree.</span></h2>
        <p class="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto homePageImg" src="../assets/img/E-learningImg2.png" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title
        ><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
</template>

<script>
import { BIconBook, BIconPencilSquare, BIconPlayBtn } from 'bootstrap-icons-vue'
export default {
  components: {
    BIconBook,
    BIconPencilSquare,
    BIconPlayBtn,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';

.icon-btn {
  color: white !important;
  border: 0px;
  text-align: center;
}

.icon-btn:hover {
  color: $success !important;
}

.icon-row {
  text-align: center;
}
.icon {
  color: $primary;
  width: 5rem;
  height: auto;
}

.homePageImg {
  width: 100%;
  min-height: 20rem;
  object-fit: cover;
}

.heading {
  color: $primary;
}

.heading2 {
  color: $success;
}

.reportHeader {
  color: $primary !important;
}

.eLearningHeader {
  color: $success !important;
}
</style>
