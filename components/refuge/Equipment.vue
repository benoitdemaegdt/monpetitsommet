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

<script setup>
const { bedIcon, mattressIcon, blanketIcon, stoveIcon, woodIcon, toiletIcon } = useIcons()

const { refuge } = defineProps({
  refuge: { type: Object, required: true },
})

const equipments = [
  {
    name: 'Capacité',
    value: `${refuge?.beds} pers`,
    icon: bedIcon,
    alt: 'icone lit',
  },
  {
    name: 'Matelas',
    value: refuge?.matresses,
    icon: mattressIcon,
    alt: 'icone matelas',
  },
  {
    name: 'Couverture',
    value: refuge?.blankets ? 'Oui' : 'Non',
    icon: blanketIcon,
    alt: 'icone couverture',
  },
  {
    name: 'Poêle',
    value: refuge?.stove ? 'Oui' : 'Non',
    icon: stoveIcon,
    alt: 'icone poêle',
  },
  {
    name: 'Bois',
    value: refuge?.wood ? 'Oui' : 'Non',
    icon: woodIcon,
    alt: 'icone bois',
  },
  {
    name: 'Toilettes',
    value: refuge?.toilets ? 'Oui' : 'Non',
    icon: toiletIcon,
    alt: 'icone toilette',
  },
]
</script>
