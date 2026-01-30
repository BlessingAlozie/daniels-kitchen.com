<template>
  <Header />
  <router-view />
  <CartSidebar />

  <!-- <Footer /> -->
</template>

<script setup>
import Header from './components/Header.vue'
import CartSidebar from '@/blocks/CartSidebar.vue'
// import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped></style>
