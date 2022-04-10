<template>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
    <div
      v-for="item in stats"
      :key="item.name"
      class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
    >
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ item.name }}
      </dt>
      <dd class="mt-1 text-3xl font-semibold text-gray-900">
        {{ item.stat }}
      </dd>
    </div>
  </dl>
</template>

<script>
const stats = [
  { name: 'Distance', stat: '42.75 km' },
  { name: 'Dénivelé +', stat: '4328 m' },
  { name: 'Cotation', stat: 'T3' },
]
export default {
  name: 'TrekStats',
  setup() {
    return {
      stats,
    }
  },
}
</script>
