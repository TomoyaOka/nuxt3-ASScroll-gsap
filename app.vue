<script setup>
onMounted(() => {
  const { $asscroll } = useNuxtApp();
  $asscroll.enable();
});
</script>

<template>
  <div class="asscroll-container">
    <NuxtPage />
  </div>
</template>

<style lang="scss"></style>
