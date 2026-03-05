<template>
  <img
    class="logo"
    alt="Logo"
    :src="logo"
  >
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
</script>

<style scoped lang="scss">
.logo {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>