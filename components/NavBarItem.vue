<template>
  <div>
    <button class="px-2 flex items-center justify-between w-full h-10 rounded hover:bg-gray-200 focus:outline-none" @click="toggleList">
      <div>{{ massif.name }}</div>
      <svg
        v-if="!isOpen"
        class="w-5 h-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <svg
        v-else
        class="w-5 h-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <template v-if="isOpen">
      <NuxtLink
        v-for="activity in massif.activities"
        :key="activity.link"
        class="mt-1 pl-4 pr-2 flex items-center justify-between h-10 rounded hover:bg-gray-100"
        :to="{ name: activity.link }"
        @click.native="$emit('close-drawer')"
      >
        <div>{{ activity.name }}</div>
        <svg class="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="activity.icon" />
        </svg>
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    massif: { type: Object, required: true }
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleList () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
