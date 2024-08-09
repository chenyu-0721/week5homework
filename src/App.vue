<script setup>
import Slide from './components/slide.vue'
</script>

<template>
  <div class="app d-flex custom-container">
    <Slide />
    <div class="flex-grow-1">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
}

.custom-container {
  max-width: 1280px;
}
</style>
