<template>
  <section class="w-full min-h-screen">
    <div class="max-w-7xl mx-auto py-10 px-4">
      <div class="text-center flex flex-col items-center">
        <h1 class="text-4xl md:text-5xl text-black font-bold leading-tight mb-4">
          Our Regular
          <span class="text-red-600">Food</span>
        </h1>

        <p class="text-base text-gray-600 mb-4 max-w-md">
          Everyday meals, cooked the way home should taste.
        </p>
      </div>
    </div>
    <section
      class="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
    >
      <FoodCard
        v-for="food in foods"
        :key="id"
        :name="food.name"
        :price="food.price"
        :image="food.image"
      />
    </section>
  </section>
</template>

<script setup>
import FoodCard from '@/components/FoodCard.vue'

const categories = ['All Food', 'Soup', 'Rice', 'Pastries', 'Pizza', 'Fresh Juice', 'Salads']
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
  {
    id: 1,
    name: 'Bole and Fish',
    price: 7000,
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },
  {
    id: 2,
    name: 'Jollof Rice',
    price: 5000,
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 3,
    name: 'Jollof Rice',
    price: 4500,
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
  {
    id: 4,
    name: 'Fruit Salad',
    price: 4500,
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
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
