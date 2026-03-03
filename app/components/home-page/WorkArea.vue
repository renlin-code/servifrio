<template>
  <LayoutPageSection
    title="Área de Atuação"
    description="Atendemos em toda a região metropolitana e cidades vizinhas."
  >
    <ClientOnly>
      <CommonWorkAreaMap
        :lat="-27.5954"
        :lng="-48.5480"
        :zoom="13"
        :radius-km="2"
      />
      <template #fallback>
        <UiSkeleton height="450px" />
      </template>
    </ClientOnly>
  </LayoutPageSection>
</template>
