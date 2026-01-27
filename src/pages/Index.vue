<template>
  <Hero />
  <!-- <HeroBlock /> -->
  <RiderSection />
  <SpecialMenu @add-to-cart="handleCart" />
  <WhychooseUs />
  <RegularMeal @add-to-cart="handleCart" />
  <Testimonials />
  <BlogSection />

  <!-- Optional: show cart -->
  <div class="cart-counter">Cart Items: {{ cartCount }}</div>
</template>

<script setup>
import { ref } from 'vue'

import Hero from '@/blocks/Hero.vue'
// import HeroBlock from '@/blocks/HeroBlock.vue'
import RiderSection from '@/blocks/RiderSection.vue'
import SpecialMenu from '@/blocks/SpecialMenu.vue'
import WhychooseUs from '@/blocks/WhychooseUs.vue'
import RegularMeal from '@/blocks/RegularMeal.vue'
import Testimonials from '@/blocks/Testimonials.vue'
import BlogSection from '@/blocks/BlogSection.vue'

const cartCount = ref(0)
const cartItems = ref([])

const handleCart = (food) => {
  cartCount.value += food.quantity // increment by quantity
  cartItems.value.push(food) // save item details if you want
  console.log('Added to cart:', food)
}
</script>


