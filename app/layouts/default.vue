<template>
  <div class="layout">
    <LayoutDefaultHeader />
    <main class="main">
      <slot />
      <UiWhatsappFloat showOnScroll />
    </main>
    <LayoutDefaultFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  padding-top: 76px;
}
</style>
