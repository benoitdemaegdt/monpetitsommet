<template>
  <section class="relative">
    <div
      class="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
      aria-hidden="true"
    ></div>
    <div
      class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"
    ></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Randonnez en autonomie sur plusieurs jours</h1>
          <p class="text-xl text-gray-600">
            Des randonnées, il y en a pour tout le monde et pour tous les goûts.
            On laissera ici de côté les sorties familiales pour ne présenter que
            des topos détaillés de randonnées exigeantes. Plus de 1500m de
            dénivelé par jour en moyenne, de la distance, des itinéraires
            parfois techniques ou accidentés et toujours au moins une nuit en
            montagne. Car quoi de plus dépaysant que d'installer son bivouac au
            soleil tombant en attendant les étoiles...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrekHome',
}
</script>
