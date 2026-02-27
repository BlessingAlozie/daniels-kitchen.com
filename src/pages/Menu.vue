<template>
  <section class="w-full bg-white mt-20 py-10">
    <!-- Title -->
    <h1 class="text-3xl font-bold text-center mb-4 text-[var(--color-primary)]">
      {{ active_title }}
    </h1>

    <!-- Desktop Categories Grid -->
    <div class="hidden lg:flex max-w-7xl mx-auto flex-col">
      <div class="hidden lg:flex max-w-7xl mx-auto flex-wrap gap-6 py-8 justify-center">
        <div
          v-for="category in categories"
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
          <h3 class="text-sm font-semibold text-center">{{ category.name }}</h3>
        </div>

        <!-- Search Bar -->
        <div class="hidden max-w-7xl mx-auto px-4 mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search foods..."
            class="w-full md:w-96 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--border)]"
          />
        </div>
      </div>
      <!-- Search Bar -->
      <div class="max-w-7xl mx-auto px-4 mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search foods..."
          class="w-full md:w-96 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--border)]"
        />
      </div>
    </div>

    <!-- Mobile Categories Carousel -->
    <div class="block flex flex-col lg:hidden max-w-full mx-auto py-6 px-4">
      <div ref="splideRef" class="splide">
        <div class="splide__track pb-10">
          <ul class="splide__list flex">
            <li
              v-for="category in categories"
              :key="category.name"
              class="splide__slide flex-shrink-0"
              @click="setActiveTitle(category.name)"
            >
              <div class="flex flex-col items-center justify-center cursor-pointer">
                <img
                  :src="category.image"
                  alt=""
                  class="w-12 h-12 rounded-full object-cover mb-2"
                />
                <h3 class="text-sm font-semibold text-center">{{ category.name }}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Search Bar -->
      <div class="max-w-7xl mx-auto px-4 mb-4 mt-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search foods..."
          class="w-full md:w-96 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--border)]"
        />
      </div>
    </div>

    <!-- Foods Grid -->
    <section>
      <div
        class="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2 md:mt-6"
      >
        <FoodCard v-for="food in paginatedFoods" :key="food.id" :food="food" />
      </div>
    </section>

    <!-- Optional: No results -->
    <p v-if="paginatedFoods.length === 0" class="text-center text-gray-400 mt-2 mb-10">
      No {{ active_title }} found.
    </p>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-6 gap-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'px-3 py-1 rounded',
          currentPage === page ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-300',
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import FoodCard from '@/components/FoodCard.vue'
import Splide from '@splidejs/splide'
import { foods } from '@/data/foods'

// States
const active_title = ref('All')
const searchQuery = ref('')
const itemPerpage = ref(10)
const currentPage = ref(1)

const setActiveTitle = (title) => {
  active_title.value = title
  // Reset to first page when category changes
  currentPage.value = 1
}

watch(searchQuery, () => {
  currentPage.value = 1
})

const filteredFoods = computed(() => {
  return foods.filter((food) => {
    const matchesCategory = active_title.value === 'All' || food.category === active_title.value
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const categories = [
  { name: 'All', image: '/images/all-food.png' },
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

const splideRef = ref(null)

onMounted(() => {
  new Splide(splideRef.value, {
    type: 'loop',
    perPage: 10,
    gap: '1rem',
    autoplay: true,
    interval: 5000,
    // speed: 1200,
    arrows: false,
    pagination: true,
    breakpoints: {
      640: { perPage: 4 }, // show 2 slides on small screens
      768: { perPage: 6 }, // show 3 slides on medium screens
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
    },
  }).mount()
})

// paginaton

// 2️⃣ Paginated foods (only slice the filtered foods!)
const paginatedFoods = computed(() => {
  const startIndex = (currentPage.value - 1) * itemPerpage.value
  const endIndex = startIndex + itemPerpage.value
  return filteredFoods.value.slice(startIndex, endIndex)
})

// 3️⃣ Total pages based on filtered foods
const totalPages = computed(() => Math.ceil(filteredFoods.value.length / itemPerpage.value))

// 4️⃣ Navigation
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
</script>



<style>
.splide__slide {
  height: auto;
}

.splide__pagination__page {
  background: #fecaca;
  opacity: 1;
  margin-top: 1rem;
  width: 12px; /* default is 8px */
  height: 12px; /* default is 8px */
}

.splide__pagination__page.is-active {
  background: #be3b25;
}
/* Arrow buttons */
.splide__arrow {
  background: #be3b25;
  opacity: 1;
}

.splide__arrow:hover {
  background: #9e2f1c;
}

/* Arrow icon (the SVG inside) */
.splide__arrow svg {
  fill: #ffffff;
}
</style>
