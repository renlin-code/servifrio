<template>
  <div class="card">
    <FontAwesomeIcon
      v-if="icon"
      class="card__icon"
      :icon="['fas', icon]"
    />
    <h3 class="card__title fs-xl">{{ title }}</h3>
    <p class="card__description fs-sm">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon?: string;
}>();
</script>

<style scoped lang="scss">
.card {
    background-color: $color_bg-light;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: 0.4s;
    text-align: center;
    &:hover {
        border-color: $color_primary;
        box-shadow: $shadow_glow;
        transform: translateY(-5px);
    }
    &__icon {
        font-size: 40px;
        color: $color_primary;
        margin-bottom: 20px;
        filter: drop-shadow($shadow_glow);
    }
    &__title {
        margin-bottom: 15px;
    }
    &__description {
        color: $color_gray;
    }
}
</style>