<template>
  <Hero />
  <!-- <HeroBlock /> -->
  <RiderSection />
  <SpecialMenu @add-to-cart="handleCart" />
  <WhychooseUs />
  <RegularMeal />
  <Testimonials />
  <BlogSection />
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
const handleCart = () => {
  cartCount.value++
}
</script>


