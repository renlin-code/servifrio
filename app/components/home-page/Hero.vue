<template>
  <section class="hero">
    <div class="app-container hero__container">
      <h1 class="hero__title">Especialistas em <span>Refrigeração</span></h1>
      <p class="hero__subtitle">Soluções completas em refrigeração comercial e industrial. Tecnologia, eficiência e o clima ideal para o seu negócio.</p>
      <UiButton
        class="hero__cta"
        variant="outline"
        size="lg"
      >
        Nossos Serviços
      </UiButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle at center, #1a2a30 0%, $color_bg-dark 70%);
  &__title {
    margin-bottom: 20px;
    font-size: 3rem;
    @media screen and (max-width: $bp_md) {
      font-size: 2rem;
    }
    span {
      color: $color_primary;
      text-shadow: $shadow_glow;
    }
  }
  &__subtitle {
    color: $color_gray;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 50px;
  }
}
</style>