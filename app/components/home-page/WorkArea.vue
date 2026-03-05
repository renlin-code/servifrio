<template>
  <LayoutPageSection
    title="Área de Atuação"
    description="Atendemos em toda a região metropolitana e cidades vizinhas."
  >
    <ClientOnly>
      <CommonWorkAreaMap
        :coordinates="{
          lat: -27.6014016,
          lng: -48.5987023
        }"
        :zoom="10"
        :radius-km="30"
      />
      <template #fallback>
        <UiSkeleton height="450px" />
      </template>
    </ClientOnly>
  </LayoutPageSection>
</template>
