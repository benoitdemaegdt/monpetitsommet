<template>
  <h2>
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>