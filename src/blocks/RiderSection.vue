<template>
  <section class="w-full bg-gray-100">
    <div
      class="wrapper max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-10 pb-10"
    >
      <div class="text">
        <h1 class="text-3xl md:text-6xl text-black font-bold max-w-lg leading-tight mb-4">
          Order Now and Get Fast
          <span class="text-red-600">Delivery</span>
        </h1>

        <p class="text-base md:text-lg text-black mb-6 max-w-md">
          Fresh meals from your favorite restaurants, delivered hot and on time.
        </p>
      </div>
      <div
        class="rider h-[200px] md:h-[400px] w-full md:w-1/2 bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${riderImage})` }"
      ></div>
    </div>
  </section>
</template>

<script setup>
const riderImage =
  'https://image2url.com/r2/default/images/1769159632329-13fdc08d-0c30-4590-a5a5-caba6a8ace12.png'
</script>

<style  scoped>
</style>