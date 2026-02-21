<template>
  <div class="w-full py-30">
    <h1 class="text-red-800">{{ activeCategory }}</h1>
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-4 bg-red-50">
      <button
        @click="activeCategory = food"
        class="border rounded-full px-4 py-2 hover:bg-red-700 hover:border-none"
        v-for="food in categories"
        :key="food"
      >
        {{ food }}
      </button>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="search ...."
        class="w-96 border border-grey-300 focus:outline-none focus:ring-2 focus focus:ring-red-500 rounded-xl"
      />
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-4">
      <food-card
        v-for="food in paginatedFoods"
        :key="food.id"
        :name="food.name"
        :price="food.price"
        :image="food.image"
      />
    </div>
    <p v-if="filteredFoods.length === 0" class="text-red-600 text-xl">
      No {{ activeCategory }} found
    </p>

    <div class="flex justify-center items-center gap-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-200 cursor-pointer rounded disabled:opacity-50"
      >
        &lt; pre
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'py-1 px-3 text-white rounded-md',
          currentPage === page ? 'bg-[var(--color-primary)]' : 'bg-gray-300',
        ]"
      >
        {{ page }}
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-200 cursor-pointer rounded disabled:opacity-30 cursor-default"
      >
        next &gt;
      </button>
    </div>
  </div>
</template>
<!-- 1. display the food (Done) -->
 <!-- 2. display by category (Done) -->
  <!-- 3. search by name (Done)  -->
   <!-- 4. pagination -->

<script setup>
import { ref, computed } from 'vue'
import FoodCard from '@/components/FoodCard.vue'

const activeCategory = ref('All Food')
const searchQuery = ref('')
const itemPerPage = ref(6)
const currentPage = ref(1)

const filteredFoods = computed(() => {
  return foods.filter((item) => {
    const matchItem =
      activeCategory.value === 'All Food' ||
      item.category.toLowerCase() === activeCategory.value.toLowerCase()
    const searchFood = item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchItem && searchFood
  })
})

const categories = ['All Food', 'Soup', 'Rice', 'Pastries', 'Native', 'Fresh Juice', 'Salads']

const foods = [
  {
    id: 1,
    name: 'Jollof Rice',
    price: 5000,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 2,
    name: 'Fruit Salad',
    price: 4500,
    category: 'Salads',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
  {
    id: 3,
    name: 'Bole and Fish',
    price: 7000,
    category: 'Native',
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },
  {
    id: 4,
    name: 'Jollof Rice',
    price: 4500,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
  {
    id: 5,
    name: 'Bole and Fish',
    price: 7000,
    category: 'Native',
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },
  {
    id: 6,
    name: 'Jollof Rice',
    price: 5000,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 7,
    name: 'Jollof Rice',
    price: 4500,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
  {
    id: 8,
    name: 'Fruit Salad',
    price: 4500,
    category: 'Salad',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
]

const paginatedFoods = computed(() => {
  const start = (currentPage.value - 1) * itemPerPage.value
  const end = start + itemPerPage.value
  return filteredFoods.value.slice(start, end)
})

const totalPages = Math.ceil(filteredFoods.value.length / itemPerPage.value)
console.log(totalPages)

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
</script>

<style  scoped>
</style>
