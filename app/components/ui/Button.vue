<template>
  <NuxtLink
    v-if="to && !to.startsWith('#')"
    :to="to"
    class="btn"
    :class="btnClasses"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="to"
    :href="to"
    class="btn"
    :class="btnClasses"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="btn"
    :class="btnClasses"
    :disabled="disabled"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'danger' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  to?: string
  variant?: Variant
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
  type?: 'submit' | 'reset'
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false,
  rounded: false
})

const btnClasses = computed(() => ({
  'btn--primary': props.variant === 'primary',
  'btn--secondary': props.variant === 'secondary',
  'btn--danger': props.variant === 'danger',
  'btn--outline': props.variant === 'outline',
  'btn--sm': props.size === 'sm',
  'btn--md': props.size === 'md',
  'btn--lg': props.size === 'lg',
  'btn--full': props.fullWidth,
  'btn--rounded': props.rounded,
  'btn--disabled': props.disabled
}))
</script>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $font-family_body;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;

  &:disabled,
  &.btn--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Sizes */
  &--sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  &--md {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &--lg {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }

  /* Variants - Primary (Default) */
  &--primary {
    background: linear-gradient(135deg, rgba($color_primary, 0.2), rgba($color_primary, 0.1));
    color: $color_white;
    border: 1px solid $color_primary;
    box-shadow: $shadow_glow;

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, rgba($color_primary, 0.3), rgba($color_primary, 0.2));
      box-shadow: 0 0 20px rgba($color_primary, 0.9);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 0 15px rgba($color_primary, 0.7);
    }
  }

  /* Variant - Secondary */
  &--secondary {
    background-color: $color_bg-light;
    color: $color_white;
    border: 1px solid rgba($color_white, 0.2);

    &:hover:not(:disabled) {
      background-color: rgba($color_white, 0.1);
      border-color: rgba($color_white, 0.4);
    }

    &:active:not(:disabled) {
      background-color: rgba($color_white, 0.15);
    }
  }

  /* Variant - Danger */
  &--danger {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid #ef4444;

    &:hover:not(:disabled) {
      background-color: rgba(239, 68, 68, 0.2);
      box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
    }

    &:active:not(:disabled) {
      background-color: rgba(239, 68, 68, 0.3);
    }
  }

  /* Variant - Outline */
  &--outline {
    background: transparent;
    color: $color_primary;
    border: 2px solid $color_primary;

    &:hover:not(:disabled) {
      background: rgba($color_primary, 0.1);
    }

    &:active:not(:disabled) {
      background: rgba($color_primary, 0.2);
    }
  }

  /* Full width */
  &--full {
    width: 100%;
  }

  /* Rounded */
  &--rounded {
    border-radius: 50px;
  }
}
</style>
