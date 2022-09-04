<template>
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationCircleIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
</script>
