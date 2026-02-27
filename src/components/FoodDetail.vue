<template>
  <section class="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <div
      class="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
    >
      <div class="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
        <img
          src="/images/cake.jpeg"
          alt="Chocolate Cake"
          class="w-full h-full object-contain md:object-cover"
        />
      </div>

      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
        <h3 class="text-3xl font-bold text-gray-800 mb-2">Chocolate Cake</h3>

        <p class="text-gray-600 leading-relaxed mb-6">
          Perfectly cooked long-grain rice tossed in a smoky wok with succulent beef chunks
          marinated in a rich blend of spices. The beef is tender, slightly charred, and bursting
          with flavor, creating a mouth-watering contrast against the soft rice and crunchy
          vegetables.
        </p>
        <p class="text-[var(--color-primary)] font-bold text-2xl mb-4">₦20,000</p>
        <div class="flex items-center gap-4 mb-8">
          <span class="text-sm font-medium text-gray-500 uppercase">Quantity</span>
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
          Add to Cart
        </button>

        <div class="mt-4 border-t border-gray-100 h-[200px]">
          <p class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Related Foods</p>
          <div class="flex gap-3">
            <img
              v-for="i in 4"
              :key="i"
              src="/images/cake.jpeg"
              class="w-38 overflow-hidden h-38 rounded-xl object-cover border-2 border-transparent hover:border-[var(--color-primary)] cursor-pointer transition"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { foods } from '@/data/foods'

const cart = useCartStore()

const quantity = ref(1)

const increase = () => quantity.value++
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

