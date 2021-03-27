<template>
  <div class="py-12 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="mt-2 px-3">
        <h1 class="text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
          {{ trek.title }}
        </h1>
        <p class="mt-1 text-2xl text-gray-800 font-semibold">
          De {{ trek.from }} à {{ trek.to }}
        </p>
        <p class="mt-2 text-lg text-gray-800 text-justify">
          {{ trek.description }}
        </p>

        <figure v-if="trek.img">
          <nuxt-img
            provider="cloudinary"
            :src="trek.img"
            class="mt-3 w-full h-80 rounded overflow-hidden object-cover"
          />
          <figcaption class="text-sm italic flex justify-center">
            {{ trek.caption }}
          </figcaption>
        </figure>

        <div class="text-2xl text-gray-900 font-bold">
          <span class="highlight">En Bref</span>
        </div>
        <div class="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- distance -->
          <div class="flex items-center">
            <nuxt-img src="/icons/distance.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Distance : </span>{{ trek.distance }} km
            </div>
          </div>
          <!-- duration -->
          <div class="flex items-center">
            <nuxt-img src="/icons/temps.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Durée : </span>{{ trek.duration }}
            </div>
          </div>
          <!-- elevation -->
          <div class="flex items-center">
            <nuxt-img src="/icons/mountain.png" class="h-5 w-5" />
            <div class="ml-2">
              D+ : {{ Math.round(trek.elevation) }} m
            </div>
          </div>
          <!-- rating -->
          <div class="flex items-center">
            <nuxt-img src="/icons/hook.png" class="h-5 w-5" />
            <div class="ml-2">
              Cotation : {{ trek.difficulty }}
            </div>
          </div>
          <!-- water -->
          <div class="flex items-center">
            <nuxt-img src="/icons/water.png" class="h-5 w-5" />
            <div class="ml-2">
              Eau : {{ trek.water | booleanToFrench }}
            </div>
          </div>
          <!-- tent -->
          <div class="flex items-center">
            <nuxt-img src="/icons/tent.png" class="h-5 w-5" />
            <div class="ml-2">
              Bivouac : {{ trek.tent | booleanToFrench }}
            </div>
          </div>
        </div>
        <div class="mt-2 text-2xl text-gray-900 font-bold">
          <span class="highlight">Le Topo</span>
        </div>
        <nuxt-content :document="trek" />
      </div>
      <div v-if="!isMobile">
        <div class="pt-12 w-1/2 h-full fixed top-0 right-0">
          <trek-map :trek="trek" :zoom="zoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin.js'
import TrekMap from '@/components/TrekMap.vue'

export default {
  components: { TrekMap },
  filters: {
    booleanToFrench (value) {
      if (!value) { return 'Non' }
      return 'oui'
    }
  },
  mixins: [LayoutMixin],
  async asyncData ({ $content, params }) {
    const trek = await $content('randonnees/bauges', params.slug).fetch()

    return {
      trek
    }
  },
  data: () => ({
    zoom: {}
  }),
  mounted () {
    for (const sectionTitle of this.trek.toc) {
      const { from, to } = this.trek.sections.find(section => section.title === sectionTitle.text)
      if (from === undefined || to === undefined) { continue }

      const sectionTitleElement = document.getElementById(sectionTitle.id)
      sectionTitleElement.addEventListener('click', () => {
        this.zoom = { from, to }
      })
    }
  }
}
</script>

<style>
.highlight {
  background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #C8E6C9 50%);
}

.nuxt-content h2 {
  @apply mt-2 text-gray-900 text-xl font-bold inline-block cursor-pointer;
}

.nuxt-content h2:hover {
  text-decoration: underline;
}

.nuxt-content p {
  @apply text-gray-800 text-lg text-justify;
}
</style>
