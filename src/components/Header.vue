<template>
  <header class="w-full fixed top-0 z-50 shadow-lg bg-black/40 backdrop-blur-sm">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-[2rem] py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold italic text-red-600">
        Daniel's Kitchen
      </router-link>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex gap-10">
          <li v-for="link in menuLinks" :key="link.name">
            <router-link :to="{ name: link.routeName }" v-slot="{ isActive }">
              <span
                class="text-lg transition-colors duration-200"
                :class="isActive ? 'text-red-600 font-bold' : 'text-white hover:text-red-600'"
              >
                {{ link.name }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Actions + Hamburger -->
      <div class="flex items-center gap-4 relative">
        <!-- Cart -->
        <div class="relative cursor-pointer flex items-center gap-1">
          <i class="fa-solid fa-basket-shopping text-2xl text-white" @click="cart.toggleCart()"></i>
          <span
            v-if="cart.totalQuantity > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"
          >
            {{ cart.totalQuantity }}
          </span>
        </div>

        <!-- Order Button -->
        <button
          @click="$router.push({ name: 'Menu' })"
          class="hidden md:block text-lg bg-red-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition"
        >
          Order Now
        </button>

        <!-- Mobile Hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex flex-col gap-1 w-8 h-6 justify-center items-center"
        >
          <span
            class="block w-8 h-1 bg-white transition-transform"
            :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
          ></span>
          <span
            class="block w-8 h-1 bg-red-600 transition-opacity"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-8 h-1 bg-white transition-transform"
            :class="menuOpen ? '-rotate-45 -translate-y-2 bg-red-600' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <nav
        v-if="menuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm z-40"
      >
        <ul class="flex flex-col gap-4 px-4 py-4">
          <li v-for="link in menuLinks" :key="link.name">
            <router-link
              :to="{ name: link.routeName }"
              class="cursor-pointer text-lg text-white hover:text-red-600 transition-colors duration-200"
              exact
              @click="menuOpen = false"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const menuOpen = ref(false)

const menuLinks = [
  { name: 'Home', routeName: 'Home' },
  { name: 'Menu', routeName: 'Menu' },
  { name: 'Reviews', routeName: 'Reviews' },
  { name: 'Blog', routeName: 'Blog' },
]
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
