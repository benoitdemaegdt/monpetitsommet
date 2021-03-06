<template>
  <div>
    <div class="pt-12 w-full h-screen mx-auto">
      <div class="h-full w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col justify-center px-0 md:px-12">
          <h1 class="text-gray-800 text-3xl md:text-5xl font-semibold leading-tight">
            Préparez votre prochaine aventure en montagne
          </h1>
          <p class="mt-4 text-gray-600 text-xl font-base">
            Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.
          </p>
          <div class="hidden md:inline mt-6">
            <button class="text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded" @click="scrollToTreks">
              VOIR LES TOPOS &rarr;
            </button>
          </div>
        </div>
        <div class="py-0 md:py-8 flex justify-center">
          <nuxt-img provider="cloudinary" :src="image.path" :alt="image.alt" class="w-full h-56 md:w-5/6 md:h-full rounded-lg overflow-hidden shadow-2xl object-cover" />
        </div>
      </div>
    </div>
    <div id="trekSection" class="md:mt-16">
      <div class="mt-16 w-11/12 md:w-3/4 mx-auto">
        <h2 class="text-gray-800 text-2xl md:text-4xl text-center font-semibold">
          Randonnez en autonomie sur plusieurs jours
        </h2>
        <p class="mt-4 text-gray-600 text-xl text-justify font-base">
          Des randonnées, il y en a pour tout le monde et pour tous les goûts. On laissera ici de côté les sorties familiales pour ne présenter que des topos détaillés de randonnées exigeantes. Plus de 1500m de dénivelé par jour en moyenne, de la distance, des itinéraires parfois techniques ou accidentés et toujours au moins une nuit en montagne. Car quoi de plus dépaysant que d'installer son bivouac au soleil tombant en attendant les étoiles...
        </p>
      </div>
      <div class="mt-4 md:mt-8 flex flex-wrap justify-around">
        <NuxtLink v-for="(trek, index) in treks" :key="trek.title" :to="{ name: `massifs-${trek.massif}-randonnees-slug`, params: { slug: trek.slug } }" class="px-1 md:mt-0" :class="{ 'mt-4': index > 0 }">
          <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
            <nuxt-img provider="cloudinary" :src="trek.img" :alt="trek.caption" loading="lazy" class="w-full h-60 object-cover" />
            <div class="px-4 py-4">
              <div class="text-xs title-font text-gray-600 tracking-widest">
                {{ trek.from.toUpperCase() }} &rarr; {{ trek.to.toUpperCase() }}
              </div>
              <div class="text-gray-800 font-semibold text-xl mb-2">
                {{ trek.title }}
              </div>
              <div class="py-3 grid grid-cols-2 gap-4 text-sm text-gray-800">
                <!-- distance -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/distance.png" alt="icone distance" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Distance : </span>{{ Math.round(trek.distance) }} km
                  </div>
                </div>
                <!-- duration -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/temps.png" alt="icone temps" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Durée : </span>{{ trek.duration }}
                  </div>
                </div>
                <!-- elevation -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/mountain.png" alt="icone montagne" class="h-5 w-5" />
                  <div class="ml-2">
                    D+ : {{ Math.round(trek.elevation) }} m
                  </div>
                </div>
                <!-- rating -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/hook.png" alt="icone difficulté" class="h-5 w-5" />
                  <div class="ml-2">
                    Cotation : {{ trek.difficulty }}
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ trek.massif }}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#rando</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-16 w-11/12 md:w-3/4 mx-auto">
      <h2 class="text-gray-800 text-2xl md:text-4xl text-center font-semibold">
        Dormez en refuge ou en cabane non gardée
      </h2>
      <p class="mt-4 text-gray-600 text-xl text-justify font-base">
        En plus des refuges, on trouve de nombreuses cabanes non gardées dans les massifs français. Il s'agit la plupart du temps d'abris très sommaires, ouverts été comme hiver afin d'accueillir les randonneurs de passage. Passer une nuit dans l'une de ces cabanes est une occasion unique de vivre une expérience inoubliable en plein coeur de la nature.
      </p>
    </div>
    <div class="mt-4 md:mt-8 w-full px-4">
      <div class="flex flex-wrap justify-around">
        <NuxtLink v-for="(refuge, index) in refuges" :key="refuge.name" :to="{ name: `massifs-${refuge.massif}-refuges-slug`, params: { slug: refuge.slug } }" class="px-1 md:mt-0" :class="{ 'mt-4': index > 0 }">
          <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
            <nuxt-img provider="cloudinary" :src="refuge.img" :alt="refuge.name" loading="lazy" class="w-full h-60 object-cover" />
            <div class="px-4 py-4">
              <div class="text-xs title-font text-gray-600 tracking-widest">
                {{ refuge.type.toUpperCase() }}
              </div>
              <div class="text-gray-800 font-semibold text-xl mb-2">
                {{ refuge.name }}
              </div>
              <div class="py-3 grid grid-cols-2 gap-4 text-sm text-gray-800">
                <!-- altitude -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/mountain.png" alt="icone montagne" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Altitude : </span>{{ refuge.altitude }}m
                  </div>
                </div>
                <!-- beds -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/bed.png" alt="icone lit" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Capacité : </span>{{ refuge.beds }} pers
                  </div>
                </div>
                <!-- stove -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/stove.png" alt="icone poêle" class="h-5 w-5" />
                  <div class="ml-2">
                    Poêle : {{ refuge.stove | booleanToFrench }}
                  </div>
                </div>
                <!-- water -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/water.png" alt="icone eau" class="h-5 w-5" />
                  <div class="ml-2">
                    Eau : {{ refuge.water | booleanToFrench }}
                  </div>
                </div>
              </div>
            </div>
            <div class="px-6 pb-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ refuge.massif }}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#refuge</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-16 w-11/12 md:w-3/4 mx-auto">
      <h2 class="text-gray-800 text-2xl md:text-4xl text-center font-semibold">
        Découvrez vos prochaines aventures
      </h2>
      <p class="mt-4 text-gray-600 text-xl text-justify font-base">
        Randonnées, bivouac, escalade, alpinisme, ski de rando et même snowkite : des aventures en montagne il y en a pour tous les goûts ! Inscrivez vous à la newsletter de Mon Petit Sommet pour recevoir directement dans votre boite mail les dernières sorties publiées sur le site.
      </p>
      <div class="mt-6 flex justify-center ">
        <a href="https://monpetitsommet.substack.com/" target="_blank" rel="noopener noreferrer" class="text-white text-sm md:text-base font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
          S'INSCRIRE À LA NEWSLETTER &rarr;
        </a>
      </div>
    </div>
    <div class="mt-16 w-full bg-gray-200 divide-y divide-gray-400">
      <div class="flex justify-center py-4">
        <nuxt-link to="/cgu" class="p-2 text-gray-700 rounded-full hover:bg-gray-300">
          CGU
        </nuxt-link>
        <nuxt-link to="/blog" class="p-2 text-gray-700 rounded-full hover:bg-gray-300">
          BLOG
        </nuxt-link>
        <nuxt-link to="/contact" class="p-2 text-gray-700 rounded-full hover:bg-gray-300">
          CONTACT
        </nuxt-link>
      </div>
      <div class="flex justify-center py-4 text-gray-700">
        <p>{{ new Date().getFullYear() }} - Mon Petit Sommet</p>
      </div>
    </div>
  </div>
</template>

<script>
import HelperMixin from '@/mixins/HelperMixin.js'

export default {
  mixins: [HelperMixin],
  async asyncData ({ $content, params }) {
    const treks = await $content('randonnees', { deep: true }, params.slug)
      .where({ title: { $in: ['Traversée du Vercors (Balcon Est)', 'Traversée des Bauges', 'Petite Traversée de la Chartreuse'] } })
      .only([
        'massif', 'title', 'img', 'caption', 'distance', 'elevation',
        'duration', 'difficulty', 'from', 'to', 'slug'
      ])
      .fetch()

    const refuges = await $content('refuges', { deep: true }, params.slug)
      .where({ name: { $in: ['Cabane de Pré Peyret', 'Cabane des Aiguillettes', 'Cabane PNRV des Chaumailloux'] } })
      .only(['massif', 'name', 'type', 'img', 'beds', 'altitude', 'stove', 'stove', 'water', 'slug'])
      .fetch()

    return { treks, refuges }
  },
  data: () => ({
    image: {
      path: 'w_900/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png',
      alt: 'balcon est du vercors'
    }
  }),
  methods: {
    scrollToTreks () {
      const element = document.getElementById('trekSection')
      const yOffset = -50
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}
</script>
