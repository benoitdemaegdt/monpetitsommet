<template>
  <div class="container px-5 pt-12 mx-auto">
    <div class="mt-4 flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-semibold">
        {{ title }}
      </h1>
    </div>
    <div class="mt-2 mx-auto">
      <p class="text-base md:text-lg text-gray-700 text-justify">
        Un écrin de nature et de vie sauvage à deux pas de la ville. C'est probablement la meilleure manière de décrire le massif de la Chartreuse.
        Situé entre les villes de Grenoble et Chambéry, ces montagnes sont très facilement accessibles en transport en commun.
        C'est donc une destination de choix pour un week end prolongé de randonnée et une immersion en pleine nature.
      </p>
    </div>
    <div v-for="trek in treks" :key="trek.title">
      <trek-card massif="chartreuse" :trek="trek" />
    </div>
  </div>
</template>

<script>
import TrekCard from '~/components/TrekCard.vue'
export default {
  components: { TrekCard },
  async asyncData ({ $content, params }) {
    const treks = await $content('randonnees/chartreuse', params.slug)
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
    title: 'Randonner en Chartreuse'
  }),
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez les plus belles randonnées sportives du massif de la Chartreuse. Parfois engagées. Souvent loin des foules. Toujours mémorables.'
        }
      ]
    }
  }
}
</script>
