<template>
  <div>
    <TrekStats />
    <TrekMap class="mt-8 rounded-lg shadow" :geojson="geojson" />
    <TrekElevationProfile class="mt-8 rounded-lg shadow" :geojson="geojson" />
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        type="button"
        class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        <MapIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Acheter la carte
      </button>
      <button
        type="button"
        class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        <DownloadIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Télécharger GPX
      </button>
    </div>
  </div>
</template>

<script>
import { DownloadIcon, MapIcon } from '@heroicons/vue/outline'

export default {
  name: 'TrekOverview',
  components: {
    DownloadIcon,
    MapIcon,
  },
  async setup() {
    const { getGeojson } = useTrekData()
    const geojson = await getGeojson()
    return {
      geojson,
    }
  },
}
</script>
