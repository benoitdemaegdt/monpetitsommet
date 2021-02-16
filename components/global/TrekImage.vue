<template>
  <figure class="mt-3">
    <div class="mt-3 w-full rounded overflow-hidden object-cover" style="height: 20rem;">
      <nuxt-picture
        provider="cloudinary"
        :src="url"
        placeholder
        class="img-cover"
      />
    </div>
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
