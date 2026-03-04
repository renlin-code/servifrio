<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Props {
  showOnScroll?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showOnScroll: false
})

const isScrolling = ref(false)
let scrollTimer: number | null = null

const isVisible = computed(() => {
  if (!props.showOnScroll) return true
  return isScrolling.value
})

const handleScroll = () => {
  if (!props.showOnScroll) return

  isScrolling.value = true

  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }

  scrollTimer = setTimeout(() => {
    isScrolling.value = false
  }, 2000)
}

onMounted(() => {
  if (props.showOnScroll) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
})
</script>

<template>
  <a
    href="https://wa.me/5548988419866"
    target="_blank"
    class="whatsapp-float"
    :class="{ 'is-visible': isVisible }"
  >
    <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
  </a>
</template>

<style scoped lang="scss">
.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    box-shadow: 0 0 15px rgba(0, 242, 255, 0.5);
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;

    &.is-visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 25px var(--ice-blue);
    }
}
</style>