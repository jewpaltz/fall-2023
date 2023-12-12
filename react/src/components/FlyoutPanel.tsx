<script setup lang="ts">

</script>

<template>
  <div class="flyout">
    <slot></slot>
  </div>
</template>

<style scoped>
  .flyout {
    position: fixed;
    height: 100vh;
    width: 20rem;
    top: 0;
    right: -18rem;
    background-color: white;
    border-left: 1px solid #ccc;
    box-shadow: 0 0 1rem #0004;
    transition: all 0.5s ease-in-out;
    z-index: 100;
  }

  .flyout:hover, .flyout.is-active {
    right: 0;
  }

  @media (max-width: 640px) {
    .flyout {
      width: 100vw;
      height: 50vh;  
      left: 0;
      right: 0;
      top: 90vh;
    }
    .flyout:hover, .flyout.is-active {
      top: 50vh;
    }
  }
</style>