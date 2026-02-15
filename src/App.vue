<template>
  <Header />
  <router-view />
  <CartSidebar />

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import CartSidebar from '@/blocks/CartSidebar.vue'
import Footer from '@/components/Footer.vue'

import { watch } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

watch(
  () => cart.isCartOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // prevent page scroll
    } else {
      document.body.style.overflow = '' // restore scroll
    }
  }
)
</script>

<style  scoped>
body {
  background: #000;
}
</style>
