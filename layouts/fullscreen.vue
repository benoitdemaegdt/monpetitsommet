<template>
  <div class="flex flex-col h-screen">
    <Header />
    <slot class="flex flex-grow" />
  </div>
</template>

<script setup>
onBeforeMount(() => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
});

</script>

<style scoped>
.h-screen {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
