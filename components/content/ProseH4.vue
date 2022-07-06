<template>
  <h3>
    <slot />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>