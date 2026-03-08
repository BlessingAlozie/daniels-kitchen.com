<template>
  <main>
    <section
      v-if="isLoading"
      class="fixed inset-0 bg-[var(--color-primary)] flex items-center justify-center z-[1000]"
    >
      <div class="loader"></div>
    </section>

    <section v-else>
      <Header />
      <router-view />
      <CartSidebar />
      <!-- <Preloader /> -->
      <Footer />
    </section>
  </main>
</template>




<script setup>
import Header from './components/Header.vue'
import CartSidebar from '@/blocks/CartSidebar.vue'
// import Preloader from '@/pages/Preloader.vue'
import Footer from '@/components/Footer.vue'

import { watch, ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

// Preloader
const isLoading = ref(true)

async function bootstrapApp() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

onMounted(async () => {
  await bootstrapApp()
  isLoading.value = false
})

// ...

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
/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
}
.loader:before {
  content: 'Loading...';
}
@keyframes l4 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}
</style>
