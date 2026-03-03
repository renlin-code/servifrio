<template>
  <section
    class="section"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="app-container section__container">
      <h2 class="section__title">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="section__description fs-lg"
      >{{ description }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description?: string,
  backgroundColor?: string
}>()
</script>
<style scoped lang="scss">
.section {
  padding: 60px 0;
  &__title {
    text-align: center;
    font-size: 2rem;
    color: $color_white;
    border-bottom: 2px solid $color_primary;
    padding-bottom: 10px;
    margin-bottom: 50px;

    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  &__description {
    color: $color_gray;
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>