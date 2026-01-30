<template>
  <header class="w-full sticky top-0 z-50 bg-white shadow">
    <div class="max-w-7xl mx-auto py-4 px-4 flex items-center justify-between">
      <!-- Left: Logo + Menu -->
      <div class="flex items-center gap-20">
        <div class="flex items-center gap-4">
          <div class="text-left">
            <router-link to="/">
              <span class="text-red-600 text-2xl font-bold italic">Daniel's</span>
              <span class="block text-black text-lg font-semibold">Kitchen</span>
            </router-link>
          </div>
          <div class="hidden lg:block w-px h-12 bg-gray-300"></div>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:block max-w-7xl mx-auto py-4 px-4">
          <ul class="flex gap-10">
            <li v-for="link in menuLinks" :key="link.name">
              <router-link
                :to="{ name: link.routeName }"
                class="cursor-pointer text-lg hover:text-red-600 transition-colors duration-200"
                active-class="text-red-600 font-bold"
                exact
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-4 relative">
        <div class="relative cursor-pointer flex items-center gap-1">
          <i class="fa-solid fa-basket-shopping text-2xl"></i>
          <span
            v-if="cart.totalItems > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"
          >
            {{ cart.totalItems }}
          </span>
        </div>

        <button
          @click="$router.push({ name: 'Menu' })"
          class="hidden md:block text-lg bg-red-600 text-white px-4 py-2 rounded-full hover:bg-green-500 cursor-pointer hover:text-white transition"
        >
          Order Now
        </button>

        <!-- Mobile Hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex flex-col gap-1 w-8 h-6 justify-center items-center"
        >
          <span
            class="block w-8 h-1 bg-black transition-transform"
            :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
          ></span>
          <span
            class="block w-8 h-1 bg-red-600 transition-opacity"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-8 h-1 bg-black transition-transform"
            :class="menuOpen ? '-rotate-45 -translate-y-2 bg-red-600' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav v-if="menuOpen" class="md:hidden bg-white shadow-lg">
      <ul class="flex flex-col gap-4 px-4 py-4">
        <li v-for="link in menuLinks" :key="link.name">
          <router-link
            :to="{ name: link.routeName }"
            class="cursor-pointer text-lg hover:text-red-600 transition-colors duration-200"
            active-class="text-red-600 font-bold"
            exact
            @click="menuOpen = false"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
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
