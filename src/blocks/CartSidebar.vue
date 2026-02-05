<template>
  <div v-if="theCart.isCartOpen">
    <!-- Overlay -->
    <div @click="theCart.closeCart()" class="fixed inset-0 bg-black/60 z-[40] cursor-pointer"></div>

    <!-- Sidebar -->
    <div class="fixed top-0 right-0 h-full overflow-auto w-[350px] bg-white shadow-lg z-50">
      <div class="p-6 relative">
        <!-- Header -->
        <div class="border-b border-gray-200 pb-4 relative">
          <h2 class="text-lg font-bold">Your Cart</h2>
          <PhXCircle
            :size="24"
            class="absolute top-0 right-0 cursor-pointer"
            @click="theCart.closeCart()"
          />
        </div>

        <!-- Cart items -->
        <div
          v-for="foodItem in theCart.cartItems"
          :key="foodItem.id"
          class="flex gap-4 py-4 border-b border-gray-200"
        >
          <img :src="foodItem.image" class="w-22 h-22 rounded object-cover" />

          <div class="flex-1">
            <p class="font-medium">{{ foodItem.name }}</p>
            <p class="text-l text-gray-500">₦{{ foodItem.price }}</p>

            <div class="flex items-center gap-3 mt-2">
              <button
                @click="theCart.decreaseFoodQuantity(foodItem.id)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
              >
                -
              </button>
              <span>{{ foodItem.quantity }}</span>
              <button
                @click="theCart.increaseFoodQuantity(foodItem.id)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
          </div>

          <PhX
            class="cursor-pointer text-gray-400 hover:text-red-500"
            @click="theCart.removeFoodFromCart(foodItem.id)"
          />
        </div>
        <div class="mt-20">
          <div class="pt-4">
            <div class="relative">
              <p>Subtotal:</p>
              <strong class="absolute top-0 right-0"> ₦{{ theCart.subTotal }}</strong>
            </div>
          </div>
          <div class="pt-4">
            <div class="relative">
              <p>Delivery Fee:</p>
              <p class="absolute top-0 right-0">0.00</p>
            </div>
          </div>
          <div class="pt-4">
            <div class="relative">
              <p>Total:</p>
              <strong class="absolute top-0 right-0"> ₦{{ theCart.subTotal }}</strong>
            </div>
          </div>

          <!-- Checkout button -->
          <button
            @click="handleCheckout"
            class="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer transition"
          >
            Checkout {{ theCart.totalQuantity }} items
          </button>
          <p v-if="errorMessage" class="mt-3 text-sm text-red-600 text-center">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const theCart = useCartStore()
const router = useRouter()

const modalOpen = ref(true)

const errorMessage = ref('')

const handleCheckout = () => {
  if (theCart.totalQuantity === 0) {
    errorMessage.value = 'Your cart is empty. Please add items before checkout.'
    return
  }

  // cart has items → go to delivery page
  errorMessage.value = ''
  router.push({ name: 'Delivery' })
  theCart.isCartOpen = !theCart.isCartOpen
}

watch(
  () => theCart.totalQuantity,
  (qty) => {
    if (qty > 0) {
      errorMessage.value = ''
    }
  }
)
</script>


