<template>
  <section class="w-full bg-gray-100 mt-10 pt-20 pb-10">
    <div class="max-w-7xl mx-auto text-center item-center">
      <h1 class="text-4xl md:text-6xl text-black font-bold leading-tight mb-2">
        Why Choose <span class="text-red-600">Us ?</span>
      </h1>
      <p class="text-base md:text-lg text-black leading-tight">
        Because good food should feel like home and arrive right on time.
      </p>
    </div>
    <section
      class="max-w-7xl mx-auto py-10 text-center item-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      v-for="(review, index) in reviews"
      :key="index"
    >
      <div class="h-auto w-[450px] relative shadow-lg rounded-lg px-4 item-left">
        <img src="/public//icons/quote.svg" class="w-[60px] pb-2 text-red-600" alt="" />
        <img :src="review.star" class="w-[35px]" alt="rate-icon" />
        <p class="text-left px-2 py-4">{{ review.desc }}</p>
        <img :src="review.picture" class="" alt="" />
        <div class="bg-black h-[50px] w-[50px] rounded-full mb-5"></div>
        <span class="absolute left-20 top-56">{{ review.name }}</span>
        <img src="/public/icons/reviews/ellipse.png" class="absolute right-0 bottom-0" alt="" />
      </div>
    </section>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Sarah A.',
    picture: '',
    desc: `The delivery was super fast and the food arrived hot and fresh. The entire process was smooth, and I’ll definitely be ordering again.`,
    star: '/public/icons/reviews/rate.svg',
  },
]
</script>
