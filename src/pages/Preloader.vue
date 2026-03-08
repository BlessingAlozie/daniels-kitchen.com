<template>
  <div class="pt-20">
    <section v-if="isLoading" class="w-full bg-[var(--color-primary)] h-screen">
      <div class="flex items-center justify-center content-center h-full">Loading...</div>
    </section>
  </div>
</template>

<script setup>
const isLoading = ref(true)
</script>

<style  scoped>
</style>
