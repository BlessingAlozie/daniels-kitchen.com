<template>
  <section
    class="relative w-full min-h-screen bg-cover bg-right bg-no-repeat"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="bg-black/20 w-full h-full absolute inset-0"></div>
    <!-- Content -->
    <div
      class="max-w-7xl mx-auto px-6 z-10 relative min-h-screen flex flex-col justify-center items-start"
    >
      <h1 class="text-white text-5xl md:text-6xl font-bold leading-none max-w-2xl">
        Homemade Taste, <span class="text-red-500">Delivered</span> in Minutes
      </h1>
      <p class="text-white text-lg mt-4 max-w-lg leading-relaxed">
        Freshly cooked lunch and dinner from Daniel's Kitchen straight to your office or home.
      </p>
      <button
        class="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
      >
        Get Yours Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path
            d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
          ></path>
        </svg>
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

