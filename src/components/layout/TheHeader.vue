<template>
  <div class="px-3 py-2 text-white" style="background: #405c6a">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <h3 style="color: #9fd18b">{{brightTitle}}</h3>
        </a>
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <router-link to="/" class="nav-link text-secondary">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
              <h5 class="h5 text-white">Home</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/manual" class="nav-link text-secondary">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
              <h5 class="h5 text-white">Smart Manual</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/report" class="nav-link text-secondary">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
              <h5 class="h5 text-white">Report</h5>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    brightTitle: {
      type: String,
    },
  },
  setup() {},
}
</script>
