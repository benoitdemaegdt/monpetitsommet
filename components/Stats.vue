<template>
  <dl class="mt-5 grid grid-cols-1 gap-5" :class="`sm:grid-cols-${stats.length}`">
    <div
      v-for="item in stats"
      :key="item.name"
      class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
    >
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ item.name }}
      </dt>
      <dd class="pl-0 mt-1 text-3xl font-semibold text-gray-900">
        {{ item.stat }}
      </dd>
    </div>
  </dl>
</template>

<script setup>
defineProps({
  stats: { type: Array, required: true },
})
</script>
