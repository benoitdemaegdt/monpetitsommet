<template>
  <div class="container px-5 pt-12 mx-auto">
    <div class="mt-4 flex justify-center">
      <h1 class="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-semibold">
        {{ title }}
      </h1>
    </div>
    <div class="mt-2 mx-auto">
      <p class="text-base md:text-lg text-gray-700 text-justify">
        Situé entre Chambéry et Annecy, le massif des Bauges est un massif
        de moyenne montagne (point culminant à 2217m) encore méconnu du grand public.
        Sa situation idéale permet pourtant aux randonneurs qui s'y engagent de découvrir de superbes paysages :
        alpages, Mont Blanc, Chartreuse, Lac du Bourget, Lac d'Annecy ... Fracture de la rétine assurée !
      </p>
    </div>
    <div v-for="trek in treks" :key="trek.title">
      <trek-card massif="bauges" :trek="trek" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const treks = await $content('randonnees/bauges', params.slug)
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
    title: 'Randonner dans les Bauges'
  }),
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez les plus belles randonnées sportives du massif des Bauges. Parfois engagées. Souvent loin des foules. Toujours mémorables.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
