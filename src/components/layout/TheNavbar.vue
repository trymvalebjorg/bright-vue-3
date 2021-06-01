<template>
  <div class="px-3 py-2 bg-primary text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <TheLogo :width="150" />
        </a>
        <ul class="nav d-flex col-12 col-lg-auto my-2 justify-content-center align-content-center my-md-0 text-small ">
          <li>
            <router-link to="/" class="nav-link link-light">
              <BIconHouseDoor class="bi d-block mx-auto" height="1.5rem" width="1.5rem" />
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/manual" class="nav-link link-light">
              <BIconBook class="bi d-block mx-auto" height="1.5rem" width="1.5rem" />
              Smart Manual
            </router-link>
          </li>
          <li>
            <router-link to="/report" class="nav-link link-light">
              <BIconPencilSquare class="bi d-block mx-auto" height="1.5rem" width="1.5rem" />
              Report
            </router-link>
          </li>
          <li>
            <router-link to="/elearning" class="nav-link link-light">
              <BIconPlayBtn class="d-block mx-auto" height="1.5rem" width="1.5rem" />
              E-learning
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconHouseDoor, BIconBook, BIconPencilSquare, BIconPlayBtn } from 'bootstrap-icons-vue'
import TheLogo from '../assets/TheLogo'

export default {
  name: 'TheNavbar',
  props: {
    pageTitle: {
      type: String,
    },
  },
  setup() {},
  components: { BIconHouseDoor, BIconBook, BIconPencilSquare, BIconPlayBtn, TheLogo },
}
</script>

<style></style>
