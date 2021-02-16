<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="py-12 mx-auto">
      <div class="lg:w-full mx-auto flex flex-wrap">
        <nuxt-picture provider="cloudinary" :src="trek.img" class="lg:w-1/2 w-full rounded overflow-hidden shadow-xl" />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-600 tracking-widest">
            {{ trek.from.toUpperCase() }} &rarr; {{ trek.to.toUpperCase() }}
          </h2>
          <h1 class="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1">
            {{ trek.title }}
          </h1>
          <div class="flex">
            <span class="flex items-center">
              <svg v-for="i in 5" :key="i" :class="i <= trek.rating ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span class="text-gray-600 ml-3">2 notes</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a class="text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed text-justify mt-2">
            {{ trek.description }}
          </p>
          <div class="mt-4 pb-5 border-b-2 border-gray-200">
            <div class="grid grid-cols-2 gap-4">
              <!-- distance -->
              <div class="flex items-center">
                <nuxt-picture src="/icons/distance.png" class="h-5 w-5" />
                <div class="ml-2">
                  <span class="hidden sm:inline">Distance : </span>{{ trek.distance }} km
                </div>
              </div>
              <!-- duration -->
              <div class="flex items-center">
                <nuxt-picture src="/icons/temps.png" class="h-5 w-5" />
                <div class="ml-2">
                  <span class="hidden sm:inline">Durée : </span>{{ trek.duration }}
                </div>
              </div>
              <!-- elevation -->
              <div class="flex items-center">
                <nuxt-picture src="/icons/mountain.png" class="h-5 w-5" />
                <div class="ml-2">
                  D+ : {{ Math.round(trek.elevation) }} m
                </div>
              </div>
              <!-- rating -->
              <div class="flex items-center">
                <nuxt-picture src="/icons/hook.png" class="h-5 w-5" />
                <div class="ml-2">
                  Cotation : {{ trek.difficulty }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <NuxtLink :to="{ name: `massifs-${massif}-randonnees-slug`, params: { slug: trek.slug } }">
              <button class="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                VOIR &rarr;
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrekCard',
  props: {
    massif: { type: String, required: true },
    trek: { type: Object, required: true }
  }
}
</script>
