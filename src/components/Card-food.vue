<template>
  <div class="h-[350px] rounded-xl shadow-lg flex flex-col">
    <!-- Food Image -->
    <div
      class="h-2/3 rounded-t-xl bg-cover bg-center"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <!-- Food Info -->
    <div class="p-4 text-black flex flex-col justify-between flex-1">
      <div class="name flex justify-between">
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <h3 class="total-amount text-green-500">₦{{ totalPrice }}</h3>
      </div>

      <!-- Quantity + Add button -->
      <div class="mt-2 pt-4 pb-6 flex items-center justify-between text-center">
        <div class="quantity flex gap-2 bg-white/20 px-2 py-1 rounded-md">
          <button
            class="px-2 text-lg w-6 h-8 border border-green-500 rounded py-1 cursor-pointer text-center font-bold"
            @click="decrease"
          >
            -
          </button>
          <span>{{ quantity }}</span>
          <button
            class="px-2 w-6 h-8 text-bold max-w-30px border border-green-500 rounded py-1 text-center cursor-pointer"
            @click="increase"
          >
            +
          </button>
        </div>
        <button
          class="addBTN cursor-pointer bg-green-500 text-white px-6 py-2 text-center rounded-full hover:bg-red-600 transition"
          @click="addToCart"
        >
          <i class="fa-solid fa-basket-shopping text-md mr-2"></i>
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

/* Props passed to the card */
const props = defineProps({
  name: String,
  price: Number,
  image: String,
})

/* Local quantity state */
const quantity = ref(1)

/* Increase quantity */
const increase = () => {
  quantity.value++
}

/* Decrease quantity */
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}

/* Compute total price for display */
const totalPrice = computed(() => {
  return (props.price * quantity.value).toLocaleString()
})

/* Add item to cart */
const addToCart = () => {
  cart.addFoodToCart({
    id: props.name,
    name: props.name,
    price: props.price,
    image: props.image,
    quantity: quantity.value,
  })

  // reset local quantity to 1 after adding
  quantity.value = 1
}
</script>

<style scoped>
.total-amount {
  font-weight: 800;
}
.quantity {
  align-content: center;
  align-items: center;
  font-weight: 600;
}
</style>
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
