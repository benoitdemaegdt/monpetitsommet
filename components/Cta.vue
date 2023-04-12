<template>
  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a
      :href="ignUrl"
      target="_blank"
      class="w-full inline-flex items-center justify-center px-6 py-3 no-underline border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
    >
      <Icon name="mdi:map-outline" class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
      Acheter la carte
    </a>
    <button
      type="button"
      class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      @click="
          alert(
            'le fichier GPX n\'a pas encore été ajouté sur cette page. Envoyez nous un message pour le recevoir par email.'
          )
        "
    >
      <Icon
        name="mdi:cloud-download-outline"
        class="-ml-1 mr-3 h-5 w-5"
        aria-hidden="true"
      ></Icon>
      Télécharger GPX
    </button>
  </div>
</template>

<script setup>
const { ignUrl } = defineProps({ ignUrl: String })

const alert = (msg) => window.alert(msg)
</script>
