<template>
  <div class="pt-12 pb-8 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-7 mt-5 px-3">
        <p>{{ shacks.length }} refuges, cabanes ou abris référencés dans ce massif</p>
        <h1 class="text-4xl text-gray-900 font-bold leading-tight">
          Refuges du vercors
        </h1>
        <div
          v-for="(shack, index) in shacks"
          :key="shack.name"
          @mouseenter="onMouseEnter(index)"
          @mouseleave="onMouseLeave"
        >
          <NuxtLink :to="{ name: 'massifs-vercors-refuges-slug', params: { slug: shack.slug } }">
            <shack-card class="mt-3" :shack="shack" />
          </NuxtLink>
        </div>
      </div>
      <div v-if="!isMobile" class="col-span-5 pt-12 w-5/12 h-full fixed top-0 right-0">
        <shack-map :shacks="shacks" :hover-shack-index="hoverShackIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin.js'

export default {
  mixins: [LayoutMixin],
  async asyncData ({ $content, params }) {
    const shacks = await $content('refuges/vercors', params.slug)
      .only([
        'massif', 'name', 'type', 'img', 'altitude', 'beds', 'stove', 'water',
        'longitude', 'latitude', 'slug', 'createdAt'
      ])
      .fetch()

    return {
      shacks
    }
  },
  data: () => ({
    hoverShackIndex: undefined
  }),
  head () {
    return {
      title: 'Liste des cabanes du Vercors',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Toutes les infos sur les plus belles cabanes du massif du Vercors. Préparez votre nuit en pleine nature au coeur du Vercors.'
        }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: `https://monpetitsommet.fr${this.$route.path}` }
      ]
    }
  },
  methods: {
    onMouseEnter (index) {
      this.hoverShackIndex = index
    },
    onMouseLeave () {
      this.hoverShackIndex = undefined
    }
  }
}
</script>
