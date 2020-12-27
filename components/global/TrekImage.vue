<template>
  <figure class="mt-3">
    <nuxt-image
      :placeholder="true"
      :src="url"
      sizes="768"
      class="w-full rounded"
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
