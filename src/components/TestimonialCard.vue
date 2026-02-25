<template>
  <section class="max-w-7xl mx-auto">
    <div class="relative shadow-lg rounded-lg p-6 bg-white text-left">
      <h3 class="font-[Manrope] text-xl font-bold">{{ name }}</h3>
      <div class="pt-2 flex">
        <PhStar
          v-for="star in rating"
          :key="star"
          :size="24"
          weight="fill"
          class="text-yellow-400"
        />
      </div>

      <p class="pt-4 text-gray-600 text-sm font-[Manrope]">
        {{ review }}
      </p>
      <h5 class="pt-4 font-normal font-[Manrope] text-md">{{ position }}</h5>
      <small class="text-gray-600 font-light font-[Manrope]">{{ company }}</small>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  rating: Number,
  review: String,
  position: String,
  company: String,
})
</script>

