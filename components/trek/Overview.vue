<template>
  <div>
    <TrekStats :trek="trek" />
    <client-only>
      <!-- <TrekMap class="mt-8 rounded-lg shadow" :geojson="geojson" /> -->
      <!-- <TrekElevationProfile class="mt-8 rounded-lg shadow" :geojson="geojson" /> -->
    </client-only>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        href="https://livre.fnac.com/a10335350/Collectif-Villard-de-Lans?oref=00000000-0000-0000-0000-000000000000&storecode=202&Origin=SEA_GOOGLE_PLA_BOOKS&esl-k=sem-google%7cng%7cc258157034827%7cm%7ckpla297361043185%7cp%7ct%7cdc%7ca60051878344%7cg1266443476&gclid=Cj0KCQjwr-SSBhC9ARIsANhzu16RZp1JRQnj4aMPrRiWs7Y5d3lpdMqrk1RqiF5XF8FDARrI4Ra8obQaAmVXEALw_wcB&gclsrc=aw.ds"
        target="_blank"
        class="w-full inline-flex items-center justify-center px-6 py-3 no-underline border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        <MapIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Acheter la carte
      </a>
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

<script setup>
import { DownloadIcon, MapIcon } from '@heroicons/vue/outline'

const props = defineProps({
  trek: Object,
})

const trek = props.trek

const { getGeojson } = useTrekData()
const geojson = await getGeojson()
</script>
