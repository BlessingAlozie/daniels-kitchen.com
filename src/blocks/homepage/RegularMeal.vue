<template>
  <section class="w-full py-20">
    <div class="max-w-7xl mx-auto px-4 bg-red-40">
      <div class="text-center flex flex-col items-center">
        <h1 class="text-4xl md:text-5xl text-black font-bold leading-tight mb-2">
          Our Regular
          <span class="text-[color:var(--color-primary)]">Food</span>
        </h1>

        <p class="text-base text-gray-600 mb-4 max-w-md">
          Everyday meals, cooked the way home should taste.
        </p>
      </div>
    </div>
    <section
      class="max-w-7xl mx-auto pt-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <FoodCard v-for="food in regularFoods" :key="food.id" :food="food" />
    </section>
  </section>
</template>

<script setup>
import FoodCard from '@/components/FoodCard.vue'
import { foods } from '@/data/foods'
import { computed } from 'vue'

const regularFoods = computed(() => {
  return foods.filter((item) => {
    return item.type === 'regular'
  })
})
</script>
