<template>
  <section class="w-full bg-gray-100 mt-10 pt-20 pb-10">
    <!-- Header -->
    <div class="max-w-7xl mx-auto text-center px-4">
      <h1 class="text-4xl md:text-6xl text-black font-bold mb-2">
        Why Choose <span class="text-red-600">Us?</span>
      </h1>
      <p class="text-base md:text-lg text-black max-w-xl mx-auto">
        Because good food should feel like home and arrive right on time.
      </p>
    </div>

    <!-- Reviews Grid -->
    <div
      class="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="relative shadow-lg rounded-lg p-4 w-90 bg-white text-left"
      >
        <!-- Quote -->
        <img src="/icons/quote.svg" class="w-10 mb-2" alt="quote" />

        <!-- Stars -->
        <img :src="review.star" class="w-8 mb-3" alt="rating" />

        <!-- Review -->
        <p class="text-sm text-gray-700 mb-4">
          {{ review.desc }}
        </p>

        <!-- User -->
        <div class="flex items-center gap-3">
          <img :src="review.picture" class="w-10 h-10 rounded-full object-cover" alt="user" />
          <span class="font-semibold text-sm">{{ review.name }}</span>
        </div>

        <!-- Decorative -->
        <img src="/icons/reviews/ellipse.png" class="absolute right-0 bottom-0 w-16" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Sarah A.',
    picture: '/icons/reviews/serah.jpg',
    desc: 'The delivery was super fast and the food arrived hot and fresh. The entire process was smooth, and I’ll definitely be ordering again.',
    star: '/icons/reviews/rate.svg',
  },
]
</script>

