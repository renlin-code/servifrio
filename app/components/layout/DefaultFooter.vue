<template>
  <footer
    class="footer"
    id="contacts"
  >
    <div class="app-container footer__container">
      <!-- <div class="footer__col">
        <h3 class="footer__col-item fs-md">Endereço</h3>
        <p class="footer__col-item fs-sm">Rua Exemplo, 123</p>
        <p class="footer__col-item fs-sm">Florianópolis, SC</p>
      </div> -->
      <div class="footer__col">
        <h3 class="footer__col-item fs-md">Horário</h3>
        <p class="footer__col-item fs-sm">Seg - Sex: 08:00 - 18:00</p>
        <p class="footer__col-item fs-sm">Sáb: 08:00 - 17:00</p>
      </div>
      <div class="footer__col">
        <h3 class="fs-md">Contato</h3>
        <UiLink
          href="tel:+5548988419866"
          class="footer__col-item fs-sm"
        >
          <FontAwesomeIcon icon="phone" />
          (48) 98841-9866
        </UiLink>
        <UiLink
          href="mailto:contato@servifrio.com.br"
          class="footer__col-item fs-sm"
        >
          <FontAwesomeIcon icon="envelope" />
          contato@servifrio.com.br
        </UiLink>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="fs-2xs">&copy; {{ currentYear }} Servifrio. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
    text-align: center;
    background-color: $color_black;
    padding: 50px 0 20px;
    border-top: 1px solid $color_bg-light;

    &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }

  h3 {
    color: $color_primary;
    margin-bottom: 10px;
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__col-item {
    color: $color_gray;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__copyright {
    text-align: center;
    border-top: 1px solid $color_bg-light;
    padding-top: 20px;
    color: $color_dark-gray;
  }
}
</style>