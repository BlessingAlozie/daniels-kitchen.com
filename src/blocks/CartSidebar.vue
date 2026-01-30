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

        <!-- Checkout button -->
        <button
          class="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Checkout {{ theCart.totalQuantity }} items
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
const theCart = useCartStore()

const modalOpen = ref(true)
</script>
