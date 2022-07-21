<template>
  <NuxtLink :to="path" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-52 w-full object-cover" :src="imageUrl" alt="cover image" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <div class="text-sm font-medium uppercase text-emerald-600">
          {{ header }}
        </div>
        <div class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ name }}
          </p>
          <div class="mt-3 grid grid-cols-2 gap-4 text-base text-gray-500">
            <div v-for="item in items" :key="item.key" class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" :src="item.iconUrl" alt="icone montagne" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.key }}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center justify-between gap-y-2">
            <span
              v-for="tag in tags"
              :key="tag"
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Card',
  props: ['path', 'imageUrl', 'header', 'name', 'items', 'tags'],
  setup(props) {
    return {
      ...props,
    }
  },
}
</script>
