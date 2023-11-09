<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getSession } from './model/session';
import NavBar from './components/NavBar.vue';

const session = getSession();

</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <progress class="progress is-small is-primary is-striped" max="100" v-if="session.loading">15%</progress>
    <RouterView />
  </div>

</template>

<style scoped>
  body {
    background-color: azure;
  }

  .container {
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 5px;
    min-height: 100vh;
  }
</style>
