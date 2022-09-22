<template>
  <div class="bg-white">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto py-16 sm:py-24">
        <div class="text-center">
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Vous êtes en avance.
          </h1>
          <p class="mt-2 text-lg text-gray-500">
            Des topos d'alpinisme seront ajoutés très prochainement.
          </p>
        </div>
        <div class="mt-12">
          <h2 class="text-sm font-semibold text-gray-500 tracking-wide uppercase">
            Autres catégories
          </h2>
          <ul role="list" class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li
              v-for="(link, linkIdx) in links"
              :key="linkIdx"
              class="relative py-6 flex items-start space-x-4"
            >
              <div class="flex-shrink-0">
                <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-50">
                  <Icon
                    :name="link.icon"
                    class="h-6 w-6 text-emerald-700"
                    aria-hidden="true"
                  ></Icon>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span
                    class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                  >
                    <NuxtLink :to="link.path" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </NuxtLink>
                  </span>
                </h3>
                <p class="text-base text-gray-500">{{ link.description }}</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <Icon
                  name="mdi:chevron-right"
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                ></Icon>
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <NuxtLink to="/" class="text-base font-medium text-emerald-600 hover:text-emerald-500"
              >Retour à l'accueil<span aria-hidden="true"> &rarr;</span></NuxtLink
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const links = [
  {
    title: 'Randonnées',
    description: 'Des topos détaillés de randos de deux ou trois jours.',
    icon: 'mdi:map-outline',
    path: '/randonnees',
  },
  {
    title: 'Ski de rando',
    description: 'Des sorties de un ou deux jours. Tout niveau.',
    icon: 'mdi:weather-sunny',
    path: '/ski-de-rando',
  },
  {
    title: 'Blog',
    description: 'Découverte de sports, test de matos, bons plans.',
    icon: 'mdi:rss',
    path: '/blog',
  },
]
</script>
