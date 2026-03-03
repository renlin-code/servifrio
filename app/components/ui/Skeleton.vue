<template>
  <div
    class="skeleton"
    :style="{ width, height, borderRadius }"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  borderRadius?: string
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  borderRadius: '10px'
})
</script>

<style scoped>
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
