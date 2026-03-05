<template>
  <header
    class="header"
    :class="{ 'header--hidden': !isHeaderVisible }"
  >
    <div class="header__container app-container">
      <NuxtLink to="/">
        <CommonLogo class="header__logo" />
      </NuxtLink>
      <LayoutNavMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
const isHeaderVisible = ref(true)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY <= 0) {
    isHeaderVisible.value = true
    lastScrollY = 0
    return
  }

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    isHeaderVisible.value = false
  } else {
    isHeaderVisible.value = true
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.header {
  background-color: rgba($color_bg-dark, 0.95);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2000;
  border-bottom: 1px solid rgba($color_primary, 0.1);
  transition: transform 0.4s ease;
  will-change: transform;

  &--hidden {
    transform: translateY(-100%);
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }

  &__logo {
    width: 200px;
    height: auto;
  }
}
</style>