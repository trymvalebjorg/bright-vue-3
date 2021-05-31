<template>
  <section class="py-3 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Smart Manual</h1>
        <p class="lead text-muted">
          Vi i BRIGHT jobber tett med FNs bærekraftsmål, og derfor er produktene våre reparerbare og kan gjenvinnes.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="col">
        <h3>SunBell Smart</h3>
      </div>
      <repair-list></repair-list>
    </div>
  </section>
</template>

<script>
import RepairList from '../components/RepairList.vue'
export default {
  components: { RepairList },
}
</script>

<style></style>
RepairItem
