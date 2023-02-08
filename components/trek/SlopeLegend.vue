<template>
  <div class="bg-white rounded-md">
    <div
      v-for="legendItem of legendItems"
      :key="legendItem.title"
      class='flex items-center'>
      <div class='h-3 w-3' :class="legendItem.color"></div>
      <div class="ml-1 text-base">{{ legendItem.title }}</div>
    </div>
  </div>
</template>

<script setup>
const legendItems = [
  { title: '30-35°', color: 'bg-[#DCD42D]' },
  { title: '35-40°', color: 'bg-[#F2AE6B]' },
  { title: '40-45°', color: 'bg-[#F2615F]' },
  { title: '>45°', color: 'bg-[#D5A7CC]' },
]
</script>

