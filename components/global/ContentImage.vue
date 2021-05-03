<template>
  <figure class="mt-3">
    <nuxt-img
      provider="cloudinary"
      :src="url"
      :alt="caption"
      loading="lazy"
      class="mt-3 w-full h-52 sm:h-80 rounded overflow-hidden object-cover"
    />
    <figcaption v-if="caption" class="text-sm italic flex justify-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    url: { type: String, required: true },
    caption: { type: String, required: false, default: undefined }
  }
}
</script>
