<template>
  <NuxtLink
    v-if="to && !to.startsWith('#')"
    class="link"
    :to="to"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else
    class="link"
    :href="to"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
}>()
</script>

<style scoped lang="scss">
.link {
  color: $color_white;
  transition: 0.3s;
  &:hover {
    color: $color_primary;
    text-shadow: $shadow_link-hover;
  }
}
</style>