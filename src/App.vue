<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="header">
    <Navbar/>
  </header>

  <main class="content">
    <RouterView />
  </main>  
</template>
