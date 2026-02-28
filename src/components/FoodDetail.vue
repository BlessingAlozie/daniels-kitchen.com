<template>
  <section class="fixed inset-0 z-50 flex items-center justify-center px-4" v-if="food">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <!-- Toast -->
    <div
      v-if="showToast"
      class="fixed top-6 z-50 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg"
    >
      {{ quantity }} {{ food.name }} added to cart
    </div>
    <div
      class="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
    >
      <PhXCircle
        :size="32"
        class="absolute top-4 right-4 cursor-pointer hover:text-red-500 transition"
        @click="closeModal"
      />
      <div class="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
        <img
          :src="food.image"
          alt="Chocolate Cake"
          class="w-full h-full object-contain md:object-cover"
        />
      </div>

      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
        <h3 class="text-3xl font-bold text-gray-800 mb-2">{{ food.name }}</h3>

        <p class="text-gray-600 leading-relaxed mb-6">
          {{ food.description }}
        </p>
        <p class="text-[var(--color-primary)] font-bold text-2xl mb-4">{{ food.price }}</p>
        <div class="flex items-center gap-4 mb-8">
          <span class="text-sm font-medium text-gray-500 uppercase">Quantity </span>
          <div class="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              @click="decrease"
              class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition shadow-sm"
            >
              -
            </button>
            <span class="px-4 font-semibold">{{ quantity }}</span>
            <button
              @click="increase"
              class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition shadow-sm"
            >
              +
            </button>
          </div>
        </div>

        <button
          @click="addToCart"
          class="w-full md:w-auto bg-[var(--color-primary)] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition"
        >
          <PhShoppingCartSimple :size="24" weight="fill" />
          {{ showToast ? ' Added!' : 'Add to Cart' }}
        </button>

        <div class="mt-4 border-t border-gray-100 h-[200px]">
          <p class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Related Foods</p>
          <div class="flex gap-3">
            <img
              v-for="item in relatedFood"
              :key="item.id"
              :src="item.image"
              class="w-38 overflow-hidden h-38 rounded-xl object-cover border-2 border-transparent hover:border-[var(--color-primary)] cursor-pointer transition"
              @click="openFood(item)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { foods } from '@/data/foods'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const food = ref(null)
const quantity = ref(1)
const cart = useCartStore()
const showToast = ref(false)

//
onMounted(() => {
  const id = parseInt(route.params.id)
  food.value = foods.find((item) => item.id === id)
})

// Quantity functions
const increase = () => quantity.value++
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}

const addToCart = () => {
  cart.addFoodToCart({
    ...food.value,
    quantity: quantity.value,
  })

  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 2000)
}

const closeModal = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const relatedFood = computed(() => {
  if (!food.value) return []

  const sameCategory = foods
    .filter((item) => item.category === food.value.category && item.id !== food.value.id)
    .slice(0, 4)

  if (sameCategory.length > 0) return sameCategory

  return foods.filter((item) => item.id !== food.value.id).slice(0, 4)
})

const openFood = (item) => {
  router.push(`/menu/${item.id}`)
  food.value = item
  quantity.value = 1
}
</script>

