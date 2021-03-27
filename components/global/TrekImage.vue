<template>
  <figure class="mt-3">
    <nuxt-img
      provider="cloudinary"
      :src="url"
      class="mt-3 w-full h-80 rounded overflow-hidden object-cover"
    />
    <figcaption class="text-sm italic flex justify-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'TrekImage',
  props: {
    url: { type: String, required: true },
    caption: { type: String, required: true }
  }
}
</script>
