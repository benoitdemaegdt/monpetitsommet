<template>
  <div>
    <Stats :stats="getCanoeTrekStats(canoeTrek)" />
    <TrekMap class="mt-8 rounded-lg shadow" :geojson="geojson" />
    <div class="mt-8">
      <button
        type="button"
        class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        @click="
          alert(
            'le fichier GPX n\'a pas encore été ajouté sur cette page. Envoyez nous un message pour le recevoir par email.'
          )
        "
      >
        <DownloadIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Télécharger GPX
      </button>
    </div>
  </div>
</template>

<script setup>
import { DownloadIcon } from '@heroicons/vue/outline'

const { canoeTrek } = defineProps({ canoeTrek: Object })

const { path } = useRoute()
const { data: geojson } = await useAsyncData(`geojson-${path}`, () => {
  return queryContent('/canoe-kayak').where({ _path: path, _type: 'json' }).findOne()
})

const { getCanoeTrekStats } = useStats()

const alert = (msg) => window.alert(msg)
</script>
