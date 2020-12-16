<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-12 bg-white text-gray-900 border-b border-gray-200 z-10"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="toggleDrawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div>Mon Petit Sommet</div>
    </div>
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
        <nuxt-link to="/a-propos" class="px-4">
          À Propos
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
        @keydown.esc="toggleDrawer"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="toggleDrawer"
        />
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span class="flex w-full h-12 items-center p-4 border-b">
        Massifs
      </span>
      <div
        v-for="massif in massifs"
        :key="massif.key"
        class="mt-2 px-2"
      >
        <NavBarItem :massif="massif" @close-drawer="toggleDrawer" />
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
  data: () => ({
    isOpen: false,
    massifs: [
      {
        name: 'Vercors',
        key: 'vercors',
        activities: [
          { name: 'Randonnées', key: 'randonnees', link: 'massifs-vercors-randonnees', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
          { name: 'Refuges', key: 'refuges', link: 'massifs-vercors-refuges', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
        ]
      },
      {
        name: 'Bauges',
        key: 'bauges',
        activities: [
          { name: 'Randonnées', key: 'randonnees', link: 'massifs-bauges-randonnees', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' }
        ]
      },
      {
        name: 'Chartreuse',
        key: 'chartreuse',
        activities: [
          { name: 'Randonnées', key: 'randonnees', link: 'massifs-chartreuse-randonnees', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' }
        ]
      }
    ]
  }),
  methods: {
    toggleDrawer () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
