<template>
  <figure class="mt-3">
    <nuxt-picture
      provider="cloudinary"
      :src="url"
      placeholder
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
