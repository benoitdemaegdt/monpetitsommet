<template>
  <figure class="mt-3">
    <nuxt-img
      provider="cloudinary"
      :src="url"
      format="webp"
      loading="lazy"
      height="600"
      class="h-full w-full rounded object-cover"
      style="height: 20rem;"
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
