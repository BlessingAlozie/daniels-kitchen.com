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
        <div class="flex flex-wrap gap-4 justify-center mt-2">
          <button
            @click="active_food = category"
            v-for="category in categories"
            :key="category"
            class="px-5 py-2 cursor-pointer rounded-full border border-[color:var(--border)] text-black hover:bg-[color:var(--color-primary)] hover:border-[color:var(--color-primary)] hover:text-white transition"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
    <section
      class="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <FoodCard
        v-for="food in filterByCategory"
        :key="id"
        :name="food.name"
        :price="food.price"
        :image="food.image"
      />
    </section>
    <div class="w-full flex justify-center items-center">
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
import router from '@/router'
import { ref, computed } from 'vue'

const active_food = ref('All Food')
const categories = ['All Food', 'Rice', 'Pastries', 'Chips', 'Salads']

const filterByCategory = computed(() => {
  return foods.filter((item) => {
    const matchCategory = active_food.value === 'All Food' || item.categories === active_food.value
    return matchCategory
  })
})

const goToMenu = () => {
  router.push({ name: 'Menu' })
}

const foods = [
  {
    id: 1,
    name: 'Chicken & Chips',
    price: 5000,
    categories: 'Chips',
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 2,
    name: 'Fruit Salad',
    price: 4500,
    categories: 'Salads',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
  {
    id: 3,
    name: 'Love donut',
    price: 1500,
    categories: 'Pastries',
    image: '/images/cake-donut.jpeg',
  },

  {
    id: 4,
    name: 'Redvelvet Cake',
    price: 4500,
    categories: 'Pastries',
    image: '/images/red-velvet-cake.jpeg',
  },
  {
    id: 5,
    name: 'Bole and Fish',
    price: 7000,
    categories: 'Native',
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },

  {
    id: 10,
    name: 'Crouisant',
    price: 3500,
    categories: 'Pastries',
    image: '/images/crouisant.jpeg',
  },
  {
    id: 11,
    name: 'Jollof Rice',
    price: 4500,
    categories: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
  {
    id: 12,
    name: 'Fruit Salad',
    price: 4500,
    categories: 'Salads',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
]
</script>
