<template>
  <div
    ref="mapContainer"
    class="work-area-map"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  coordinates: {
    lat: number
    lng: number
  }
  radiusKm: number
  zoom?: number
}

const props = withDefaults(defineProps<Props>(), {
  zoom: 13,
})

const mapContainer = ref<HTMLElement | null>(null)

onMounted(async () => {
  // Import Leaflet only on the client side
  const L = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  // Fix default marker icon issue
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })

  if (!mapContainer.value) return

  // Initialize the map
  const map = L.map(mapContainer.value).setView([props.coordinates.lat, props.coordinates.lng], props.zoom)

  // Add tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  // Add coverage area circle
  L.circle([props.coordinates.lat, props.coordinates.lng], {
    color: '#00f2ff',
    fillColor: '#00f2ff',
    fillOpacity: 0.3,
    radius: props.radiusKm * 1000 // Convert km to meters
  }).addTo(map)

  // Add marker at the center
  L.marker([props.coordinates.lat, props.coordinates.lng]).addTo(map)
    .bindPopup('Área de Atuação')
})
</script>

<style scoped>
.work-area-map {
  width: 100%;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
