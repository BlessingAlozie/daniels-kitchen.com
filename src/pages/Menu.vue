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
        <FoodCard
          v-for="food in paginatedFoods"
          :key="food.id"
          :name="food.name"
          :price="food.price"
          :image="food.image"
        />
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
        :class="{
          'bg-[var(--color-primary)] text-white': currentPage === page,
          'bg-gray-200': currentPage !== page,
        }"
        class="px-3 py-1 rounded"
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
import { ref, computed, onMounted } from 'vue'
import FoodCard from '@/components/FoodCard.vue'
import Splide from '@splidejs/splide'

const active_title = ref('All')
const searchQuery = ref('')
const itemPerpage = ref(10)
const currentPage = ref(1)

const setActiveTitle = (title) => {
  active_title.value = title
  currentPage.value = 1 // Reset to first page when category changes
}

const filteredFoods = computed(() => {
  return foods.filter((food) => {
    const matchesCategory = active_title.value === 'All' || food.category === active_title.value
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
//

// Only filter by category if it's not "All Food"
// const filteredFoods = computed(() => {
//   return foods.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
// })

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
    category: 'Salads',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
  {
    id: 9,
    name: 'Jollof Rice',
    price: 5000,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg',
  },
  {
    id: 10,
    name: 'Fruit Salad',
    price: 4500,
    category: 'Salads',
    image:
      'https://image2url.com/r2/default/images/1769156794327-c6425b2f-763b-4058-98ff-c86b23e60610.jpg',
  },
  {
    id: 11,
    name: 'Bole and Fish',
    price: 7000,
    category: 'Native',
    image:
      'https://image2url.com/r2/default/images/1769155837445-cc8c64a4-f61b-40af-9a94-c912ba72118e.jpg',
  },
  {
    id: 12,
    name: 'Jollof Rice',
    price: 4500,
    category: 'Rice',
    image:
      'https://image2url.com/r2/default/images/1769155907234-e4dd47b7-4afd-4469-a852-e4d14ce7e211.jpg',
  },
  {
    id: 13,
    name: 'cake',
    price: 20000,
    category: 'Cakes',
    image:
      'https://image2url.com/r2/default/images/1769805287001-37933905-3db8-47ec-abdf-c7ec54465a2b.jpeg',
  },
  {
    id: 14,
    name: 'Milkshake',
    price: 8500,
    category: 'Drinks',
    image:
      'https://image2url.com/r2/default/images/1769805451378-1411fc97-cb3c-4f13-b7ce-b0fb59f517b5.jpeg',
  },
]

const splideRef = ref(null)

onMounted(() => {
  new Splide(splideRef.value, {
    type: 'loop', // loop continuously
    perPage: 10, // number of slides per view
    gap: '1rem', // spacing between slides
    autoplay: true, // enable automatic sliding
    interval: 2500, // 2.5 seconds per slide
    arrows: false, // show arrows
    pagination: true, // show dots
    breakpoints: {
      640: { perPage: 5 }, // show 2 slides on small screens
      768: { perPage: 6 }, // show 3 slides on medium screens
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
