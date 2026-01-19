<template>
  <header class="w-full bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Left: Logo + Menu -->
      <div class="flex items-center gap-20">
        <div class="logo">
          <img src="/logo.svg" alt="Logo" class="h-12" />
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:block">
          <ul class="flex gap-10">
            <li
              v-for="link in menuLinks"
              :key="link"
              @click="setActive(link)"
              :class="[
                'cursor-pointer text-lg hover:text-red-600 transition-colors duration-200',
                activeLink.value === link ? 'text-red-600 font-bold' : '',
              ]"
            >
              {{ link }}
            </li>
          </ul>
        </nav>
      </div>

      <!-- Right: Actions-->
      <div class="flex items-center gap-4">
        <p class="cursor-pointer text-lg flex items-center">
          <i class="fa-solid fa-basket-shopping text-2xl mr-2"></i>Cart
        </p>

        <button
          class="hidden md:block text-lg bg-red-600 text-white px-4 py-2 rounded-4xl hover:bg-black hover:text-red-600 transition"
        >
          Order Now Today
        </button>

        <!-- Mobile view -->
        <!-- Hamburger -->
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
        <li
          v-for="link in menuLinks"
          :key="link"
          @click="setActive(link)"
          :class="[
            'cursor-pointer text-lg hover:text-red-600 transition-colors duration-200',
            activeLink.value === link ? 'text-red-600 font-bold' : '',
          ]"
        >
          {{ link }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const activeLink = ref('Home')
const menuLinks = ['Home', 'Menu', 'Reviews', 'Blog']
const menuOpen = ref(false)

function setActive(item) {
  activeLink.value = item
  menuOpen.value = false // close mobile menu when a link is clicked
}
</script>
