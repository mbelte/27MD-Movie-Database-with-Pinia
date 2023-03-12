<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
      <RouterLink to="/" class="navbar__item" active-class="">Home</RouterLink>
      <RouterLink to="/movie" class="navbar__item">Movies</RouterLink>
  </nav>
</template>
