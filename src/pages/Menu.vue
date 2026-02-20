<template>
  <section class="w-full bg-white mt-20">
    <h1 class="text-2xl font-bold text-center mb-4">
      {{ active_title }}
    </h1>
    <!-- Parent flex container -->
    <div class="max-w-7xl mx-auto flex justify-between items-center gap-6">
      <!-- Categories Grid -->
      <div class="flex flex-wrap flex-1 gap-6 py-8">
        <div
          v-for="category in filteredCategories"
          :key="category.name"
          @click="setActiveTitle(category.name)"
          class="mb-4 flex flex-col items-center justify-center cursor-pointer"
          :class="
            active_title === category.name
              ? 'text-[var(--color-primary)] font-bold'
              : 'text-gray-800 hover:text-[var(--primary-hover)]'
          "
        >
          <img :src="category.image" alt="" class="w-12 h-12 rounded-full object-cover mb-2" />
          <h3 class="text-sm font-semibold text-center">
            {{ category.name }}
          </h3>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search categories..."
          class="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--border)]"
        />
      </div>
    </div>

    <!-- Optional: No results -->
    <p v-if="filteredCategories.length === 0" class="text-center text-gray-400 mt-6">
      No categories found.
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const active_title = ref('All Food')
const searchQuery = ref('')

const setActiveTitle = (title) => {
  active_title.value = title
}

const filteredCategories = computed(() => {
  return categories.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const categories = [
  { name: 'All ', image: '/images/all-food.png' },
  { name: 'Soups', image: '/images/soups.jpeg' },
  { name: 'Rice', image: '/images/rice.jpeg' },
  { name: 'Pastries', image: '/images/pastries.jpeg' },
  { name: 'Breakfast', image: '/images/breakfast.jpeg' },
  { name: 'Cakes', image: '/images/cake.jpeg' },
  { name: 'Salads', image: '/images/salads.jpeg' },
  { name: 'Drinks', image: '/images/drinks.jpeg' },
  { name: 'Native', image: '/images/native.jpeg' },
  { name: 'Proteins', image: '/images/proteins.jpeg' },
]
</script>


