<template>
  <section class="relative w-full min-h-screen overflow-hidden">
    <!-- Flipped background image -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-x-[-1] z-0"
      :style="{ backgroundImage: `url(${heroImageUrl})` }"
    ></div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/30 z-10"></div>

    <!-- Content -->
    <div
      class="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12"
    >
      <div class="max-w-xl">
        <h1 class="text-4xl md:text-6xl text-white/80 font-bold leading-tight mb-4">
          Homemade Taste,
          <span class="text-red-600">Delivered</span> in Minutes
        </h1>

        <p class="text-base md:text-lg text-white mb-6 max-w-lg">
          Freshly cooked lunch and dinner from Daniel's Kitchen straight to your home or office.
        </p>

        <div class="flex gap-4">
            <button class="bg-red-600 text-white px-10 py-3 rounded-full hover:bg-black transition">
              Order Now
            </button>
        </div>
      </div>
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

const heroImageUrl =
  'https://image2url.com/r2/default/images/1769115704541-4cf3041a-5b28-447b-8114-26ac53f333aa.png'

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

