<template>
  <div class="container px-5 pt-12 mx-auto">
    <div class="mt-4 flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-semibold">
        {{ title }}
      </h1>
    </div>
    <div class="mt-2 mx-auto">
      <p class="text-base md:text-lg text-gray-700 text-justify">
        Bien connu pour son accès facile, ses paysages sauvages et sa faune abondante,
        le Vercors est un massif qui offre de nombreuses possibilités de randonnées.
        Il y a d'abord le grand classique : la Grande Traversée du Vercors par le GR 91 qui permet
        en quelques jours de relier Saint-Nizier-du-Moucherotte à Châtillon en-Diois. Mais on trouve également
        de nombreux autres itinéraires, plus sauvages ou plus engagées, qui permettent de découvrir l'immensité de
        la réserve naturelle des hauts plateaux du Vercors.
      </p>
    </div>
    <div v-for="trek in treks" :key="trek.title">
      <trek-card massif="vercors" :trek="trek" />
    </div>
  </div>
</template>

<script>
import TrekCard from '~/components/TrekCard.vue'
export default {
  components: { TrekCard },
  async asyncData ({ $content, params }) {
    const treks = await $content('randonnees/vercors', params.slug)
      .only([
        'title', 'description', 'img', 'rating', 'distance', 'elevation',
        'duration', 'difficulty', 'from', 'to', 'slug', 'createdAt'
      ])
      .fetch()

    return {
      treks
    }
  },
  data: () => ({
    title: 'Randonner dans le Vercors'
  }),
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez les plus belles randonnées sportives du massif du Vercors. Parfois engagées. Souvent loin des foules. Toujours mémorables.'
        }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: `https://monpetitsommet.fr${this.$route.path}` }
      ]
    }
  }
}
</script>
