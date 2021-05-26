<template>
  <div class="px-3 py-2 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <h3>{{ pageTitle }}</h3>
        </a>
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <router-link to="/" class="nav-link text-secondary">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/manual" class="nav-link text-secondary">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
              Smart Manual
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
    pageTitle: {
      type: String,
    },
  },
  setup() {},
}
</script>
