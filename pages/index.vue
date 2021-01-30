<template>
  <div class="pb-24">
    <div class="pt-12 w-full h-screen mx-auto">
      <div class="h-full w-11/12 mx-auto grid grid-cols-2">
        <div class="w-5/6 mx-auto flex flex-col justify-center">
          <h1 class="text-gray-800 text-5xl font-semibold leading-tight">
            Préparez votre prochaine aventure en montagne
          </h1>
          <p class="mt-4 text-gray-600 text-xl font-base">
            Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.
          </p>
          <div class="mt-6">
            <button class="text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
              VOIR LES TOPOS &rarr;
            </button>
          </div>
        </div>
        <div class="py-8 flex justify-center">
          <div class="w-5/6 h-full">
            <nuxt-img provider="cloudinary" :src="image" class="object-cover h-full w-full rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 w-3/4 mx-auto">
      <h2 class="text-gray-800 text-4xl text-center font-semibold">
        Randonnez en autonomie sur plusieurs jours
      </h2>
      <p class="mt-4 text-gray-600 text-xl text-justify font-base">
        Des randonnées, il y en a pour tout le monde et pour tous les goûts. On laissera ici de côté les sorties familiales pour ne présenter que des topos détaillés de randonnées exigeantes. Plus de 1500m de dénivelé par jour en moyenne, de la distance, des itinéraires parfois techniques ou accidentés et toujours au moins une nuit en montagne. Car quoi de plus dépaysant que d'installer son bivouac au soleil tombant en attendant les étoiles...
      </p>
      <div class="mt-8 flex flex-wrap justify-around">
        <NuxtLink v-for="trek in treks" :key="trek.title" :to="{ name: `massifs-${trek.massif}-randonnees-slug`, params: { slug: trek.slug } }" class="px-1">
          <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
            <nuxt-img provider="cloudinary" :src="trek.img" class="w-full h-56 object-cover" />
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
                  <nuxt-img src="/icons/distance.png" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Distance : </span>{{ Math.round(trek.distance) }} km
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
    <div class="mt-16 w-3/4 mx-auto">
      <h2 class="text-gray-800 text-4xl text-center font-semibold">
        Dormez en refuge ou en cabane non gardée
      </h2>
      <p class="mt-4 text-gray-600 text-xl text-justify font-base">
        En plus des refuges, on trouve de nombreuses cabanes non gardées dans les massifs français. Il s'agit la plupart du temps d'abris très sommaires, ouverts été comme hiver afin d'accueillir les randonneurs de passage. Passer une nuit dans l'une de ces cabanes est une occasion unique de vivre une expérience inoubliable en plein coeur de la nature.
      </p>
    </div>
    <div class="mt-8 w-full px-4">
      <div class="flex flex-wrap justify-around">
        <NuxtLink v-for="refuge in refuges" :key="refuge.name" :to="{ name: `massifs-${refuge.massif}-refuges-slug`, params: { slug: refuge.slug } }" class="px-1">
          <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
            <nuxt-img provider="cloudinary" :src="refuge.img" class="w-full h-56 object-cover" />
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
                  <nuxt-img src="/icons/mountain.png" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Altitude : </span>{{ refuge.altitude }}m
                  </div>
                </div>
                <!-- beds -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/bed.png" class="h-5 w-5" />
                  <div class="ml-2">
                    <span class="hidden sm:inline">Capacité : </span>{{ refuge.beds }} pers
                  </div>
                </div>
                <!-- stove -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/stove.png" class="h-5 w-5" />
                  <div class="ml-2">
                    Poêle : {{ refuge.stove | booleanToFrench }}
                  </div>
                </div>
                <!-- water -->
                <div class="flex items-center">
                  <nuxt-img src="/icons/water.png" class="h-5 w-5" />
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
    <div class="mt-16 w-3/4 mx-auto">
      <h2 class="text-gray-800 text-4xl text-center font-semibold">
        Découvrez vos prochaines aventures
      </h2>
      <p class="mt-4 text-gray-600 text-xl text-justify font-base">
        Randonnées, bivouac, escalade, alpinisme, ski de rando et même snowkite : des aventures en montagne il y en a pour tous les goûts ! Inscrivez vous à la newsletter de Mon Petit Sommet pour recevoir directement dans votre boite mail les dernières sorties publiées sur le site.
      </p>
      <div class="mt-6 flex justify-center ">
        <a href="https://monpetitsommet.substack.com/" target="_blank" rel="noopener noreferrer" class="text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
          S'INSCRIRE À LA NEWSLETTER &rarr;
        </a>
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
      .where({ title: { $in: ['Traversée du Vercors (Balcon Est)', 'Traversée des Bauges'] } })
      .only([
        'massif', 'title', 'img', 'distance', 'elevation',
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
    image: 'w_900/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png'
  })
}
</script>
