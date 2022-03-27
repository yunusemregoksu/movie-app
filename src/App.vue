<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
