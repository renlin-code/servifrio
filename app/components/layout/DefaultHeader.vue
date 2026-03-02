<template>
  <header class="header">
    <div class="header__container app-container">
      <div class="logo">
        LOGO
      </div>
      <LayoutNavMenu />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: rgba($color_black, 0.95);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba($color_primary, 0.1);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: $color_white;
}
</style>