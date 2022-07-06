<template>
  <lite-youtube :videoid="videoid" :playlabel="label" />
</template>

<script setup>
defineProps({
  videoid: { type: String, required: true },
  label: { type: String, required: false },
})
</script>
