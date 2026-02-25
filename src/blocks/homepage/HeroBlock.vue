<template>
  <section
    class="relative w-full min-h-screen bg-cover bg-right bg-no-repeat"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="bg-black/70 lg:bg-black/10 w-full h-full absolute inset-0"></div>
    <!-- Content -->
    <div
      class="max-w-7xl mx-auto px-4 md:px-6 z-10 relative min-h-screen flex flex-col justify-center items-start"
    >
      <h1
        class="text-white font-['Manrope'] text-4xl md:text-5xl font-medium leading-none max-w-2xl"
      >
        Homemade Taste,Delivered
        <span class="text-[color:var(--color-primary)]"> Fresh & Fast</span>
      </h1>
      <p class="text-white font-['Manrope'] max-w-xl mt-4 text-lg leading-relaxed">
        Skip the stress of cooking and the wait at restaurants. Get wholesome, delicious homemade
        meals delivered fast anytime you crave comfort food.
      </p>
      <button
        @click="goToMenu"
        class="mt-8 bg-[color:var(--color-primary)] font-['Manrope'] hover:bg-[color:var(--primary-hover)] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
      >
        Get Yours Now
        <PhArrowRight :size="24" />
      </button>
    </div>
  </section>
  <!-- food card display -->
  <section class="w-full bg-white py-20">
    <div
      class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <FoodCard
        v-for="food in foods"
        :key="id"
        :name="food.name"
        :price="food.price"
        :image="food.image"
      />
    </div>
  </section>
</template>


<script setup>
import FoodCard from '@/components/FoodCard.vue'
import router from '@/router'

const goToMenu = () => {
  router.push({ name: 'Menu' })
}
const heroImage = '/images/hero_image.webp'
const foods = [
  {
    id: 1,
    name: 'Jollof Rice',
    price: 5000,
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 2,
    name: 'Fruit Salad',
    price: 4500,
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
  {
    id: 3,
    name: 'Bole and Fish',
    price: 7000,
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },
  {
    id: 4,
    name: 'Jollof Rice',
    price: 4500,
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
]
</script>

