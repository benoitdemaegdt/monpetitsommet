<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-emerald-600 uppercase"
        >
          Blog
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Derniers articles
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Les articles 100% aventure de Mon Petit Sommet
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
      >
        <NuxtLink
          v-for="article in articles"
          :key="article.title"
          :to="article.path"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-52 w-full object-cover"
              :src="article.imageUrl"
              alt="cover image"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="text-sm font-medium uppercase text-emerald-600">
                {{ article.type }}
              </div>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ article.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ article.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
const articles = [
  {
    type: 'Article',
    title: 'Découvrir le snowkite en 4 questions',
    subtitle:
      "Vous avez entendu parler du snowkite et vous vous posez des questions sur ce sport ? Lisez cet article pour tout comprendre, du matériel nécessaire au type d'aile en passant par les meilleurs spots et la météo !",
    path: '/blog/snowkite',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1642016804/snowkite/snowkite_barrvl.jpg',
  },
  {
    type: 'Article',
    title: 'Tout savoir sur le vol de pente en snowkite',
    subtitle:
      "Proche du speedriding et du parapente, le vol de pente consiste à utiliser son aile de snowkite pour décoller et se maintenir en l'air le temps d'une descente. On vous explique comment ça fonctionne.",
    path: '/blog/snowkite',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/v1603218138/bauges/randonnees/traversee-bauges-frontenex-annecy/intro_ppjy7g.jpg',
  },
  {
    type: 'Article',
    title: 'Quels sont les 11 parcs nationaux français ?',
    subtitle:
      'Un parc national français désigne un espace protégé du fait de sa richesse naturelle exceptionnelle. Depuis novembre 2019 on dénombre très exactement 11 parcs nationaux en France : la Vanoise, Port-Cros, les Pyrénées, les Cévennes, les Écrins, le Mercantour, la Guadeloupe, la Réunion, la Guyane, les Calanques et enfin le tout récent parc national de forêts.',
    path: '/blog/snowkite',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1618861709/articles/parcs-nationaux-france/parc-nationaux_fx2kyn.png',
  },
]

export default {
  name: 'Blog',
  setup: () => ({
    articles,
  }),
}
</script>
