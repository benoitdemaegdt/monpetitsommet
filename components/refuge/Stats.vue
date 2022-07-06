<template>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
    <div
      v-for="item in stats"
      :key="item.name"
      class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
    >
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ item.name }}
      </dt>
      <dd class="mt-1 text-3xl font-semibold text-gray-900">
        {{ item.value }}
      </dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: 'TrekStats',
  props: ['refuge'],
  setup(props) {
    return {
      stats: [
        { name: 'Massif', value: props.refuge.massif },
        { name: 'Altitude', value: `${props.refuge.altitude} m` },
      ],
    }
  },
}
</script>
