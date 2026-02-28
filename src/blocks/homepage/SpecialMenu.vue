<template>
  <section class="w-full min-h-screen">
    <div class="max-w-7xl mx-auto py-10 px-4">
      <div class="text-center flex flex-col items-center">
        <h1 class="text-4xl md:text-5xl text-black font-bold leading-tight mb-4">
          Special
          <span class="text-[color:var(--color-primary)]">Menu</span>
        </h1>

        <p class="text-base text-gray-600 mb-4 max-w-md">
          Today’s chef-picked dishes, made with extra care.
        </p>

        <!-- Categories -->
        <!-- <div class="flex flex-wrap gap-4 justify-center mt-2">
          <button
            @click="active_food = category"
            v-for="category in categories"
            :key="category"
            class="px-5 py-2 cursor-pointer rounded-full border border-[color:var(--border)] text-black hover:bg-[color:var(--color-primary)] hover:border-[color:var(--color-primary)] hover:text-white transition"
          >
            {{ category }}
          </button>
        </div> -->
      </div>
    </div>
    <section
      class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <FoodCard v-for="food in SpecialFood" :key="food.id" :food="food" />
    </section>
    <div class="w-full flex justify-center items-center mt-15">
      <button
        @click="goToMenu"
        class="bg-[color:var(--color-primary)] flex text-white px-8 gap-3 py-3 rounded-full hover:bg-[color:var(--primary-hover)] border-none outline-none cursor-pointer"
      >
        View All Products
        <span><PhArrowRight :size="24" /></span>
      </button>
    </div>
  </section>
</template>

<script setup>
import FoodCard from '@/components/FoodCard.vue'
import { foods } from '@/data/foods'
import router from '@/router'
import { computed } from 'vue'

// const active_food = ref('All Food')
// const categories = ['All Food', 'Rice', 'Pastries', 'Chips', 'Salads']

// const filterByCategory = computed(() => {
//   return foods.filter((item) => {
//     const matchCategory = active_food.value === 'All Food' || item.categories === active_food.value
//     return matchCategory
//   })
// })

const SpecialFood = computed(() => {
  return foods.filter((item) => {
    return item.type === 'special'
  })
})

const goToMenu = () => {
  router.push({ name: 'Menu' })
}
</script>
