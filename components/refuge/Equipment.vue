<template>
  <div class="not-prose grid grid-cols-2 gap-4 sm:grid-cols-3">
    <div
      v-for="equipment in equipments"
      :key="equipment.name"
      class="relative px-6 py-5 flex items-center space-x-3 bg-white shadow rounded-lg overflow-hidden"
    >
      <div class="flex-shrink-0">
        <img class="h-7 w-7" :src="equipment.icon" alt="" />
      </div>
      <div class="flex-1 min-w-0">
        <div>
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ equipment.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ equipment.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RefugeEquipment',
  props: ['refuge'],
  setup(props) {
    return {
      equipments: [
        {
          name: 'Capacité',
          value: `${props?.refuge?.beds} pers`,
          icon: '/icons/bed.png',
          alt: 'icone lit',
        },
        {
          name: 'Matelas',
          value: props?.refuge?.matresses,
          icon: '/icons/mattress.png',
          alt: 'icone matelas',
        },
        {
          name: 'Couverture',
          value: props?.refuge?.blankets ? 'Oui' : 'Non',
          icon: '/icons/blanket.png',
          alt: 'icone couverture',
        },
        {
          name: 'Poêle',
          value: props?.refuge?.stove ? 'Oui' : 'Non',
          icon: '/icons/stove.png',
          alt: 'icone poêle',
        },
        {
          name: 'Bois',
          value: props?.refuge?.wood ? 'Oui' : 'Non',
          icon: '/icons/wood.png',
          alt: 'icone bois',
        },
        {
          name: 'Toilettes',
          value: props?.refuge?.toilets ? 'Oui' : 'Non',
          icon: '/icons/toilet.png',
          alt: 'icone toilette',
        },
      ],
    }
  },
}
</script>
