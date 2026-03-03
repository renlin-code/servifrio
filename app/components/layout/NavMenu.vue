<template>
  <nav class="nav-menu">
    <button
      class="burger-btn"
      :class="{ 'is-open': isOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>

    <ul
      class="nav-menu__links nav-links"
      :class="{ 'is-open': isOpen }"
    >
      <li>
        <UiLink
          to="#inicio"
          @click="closeMenu"
        >Início</UiLink>
      </li>
      <li>
        <UiLink
          to="#servicos"
          @click="closeMenu"
        >Serviços</UiLink>
      </li>
      <li>
        <UiLink
          to="#area-atuacao"
          @click="closeMenu"
        >Atuação</UiLink>
      </li>

      <li>
        <UiButton
          variant="outline"
          size="sm"
          to="/contacto"
          rounded
          @click="closeMenu"
        >Contacto</UiButton>
      </li>
    </ul>

    <div
      v-if="isOpen"
      class="menu-overlay"
      @click="closeMenu"
    ></div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen.value) {
      closeMenu();
    }
  };
  window.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
  });
});
</script>

<style scoped lang="scss">
.nav-menu {
  position: relative;

  &__links {
    display: flex;
    list-style: none;
    gap: 30px;
    align-items: center;

    @media screen and (max-width: 768px) {
      position: fixed;
      top: 76px;
      right: 0;
      height: calc(100vh - 76px);
      width: 280px;
      background-color: $color_bg-light;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 1000;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);

      &.is-open {
        transform: translateX(0);
      }
    }
  }

  a {
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
}

.burger-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  .burger-line {
    width: 28px;
    height: 3px;
    background-color: $color_white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.is-open {
    transform: rotate(-90deg);

    .burger-line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .burger-line:nth-child(2) {
      opacity: 0;
    }

    .burger-line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

.menu-overlay {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 76px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 76px);
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
}
</style>
