<template>
  <lite-youtube :videoid="videoId" :playlabel="label" />
</template>

<script>
import 'lite-youtube-embed/src/lite-yt-embed.css'
export default {
  props: {
    videoId: { type: String, required: true },
    label: { type: String, required: true },
  },
}
</script>
