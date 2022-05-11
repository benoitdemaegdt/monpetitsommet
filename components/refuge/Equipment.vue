<template>
  <div class="grid grid-cols-2 gap-2 text-base text-gray-500">
    <div
      v-for="equipment in equipments"
      :key="equipment.name"
      class="flex items-center"
    >
      <img :src="equipment.icon" :alt="equipment.alt" class="m-0 h-5 w-5" />
      <div class="ml-2">{{ equipment.name }}: {{ equipment.value }}</div>
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
          name: 'Eau',
          value: props?.refuge?.water ? 'Oui' : 'Non',
          icon: '/icons/water.png',
          alt: 'icone eau',
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
