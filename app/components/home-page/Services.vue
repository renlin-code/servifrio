<template>
  <LayoutPageSection title="Nossos Serviços">
    <div class="services__grid">
      <CommonCard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
      />
    </div>
  </LayoutPageSection>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Câmaras Frigoríficas",
    description: "Montagem e manutenção de câmaras frias para conservação de produtos perecíveis.",
    icon: "industry",
  },
  {
    title: "Sistemas Chiller",
    description: "Manutenção e restauração especializada em resfriadores de líquido para grandes indústrias.",
    icon: "fan",
  },
  {
    title: "Climatização",
    description: "Instalação profissional de ar condicionado Split Hi-Wall, Cassete e Piso Teto com garantia.",
    icon: "snowflake",
  },
  {
    title: "Manutenção (PMOC)",
    description: "Plano de Manutenção, Operação e Controle para qualidade do ar.",
    icon: "file-contract",
  },
  {
    title: "Infraestrutura",
    description: "Projetos de tubulação e infraestrutura elétrica para sistemas de climatização.",
    icon: "tools",
  },
  {
    title: "Carga de Gás",
    description: "Detecção de vazamentos e recarga de gás refrigerante ecológica.",
    icon: "temperature-low",
  },
];
</script>

<style scoped lang="scss">
.services {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
}
</style>