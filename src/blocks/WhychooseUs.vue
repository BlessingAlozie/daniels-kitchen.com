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
    >
      <div class="h-[250px] rounded-xl shadow-lg py-20 px-7" v-for="reason in why" :key="icon">
        <div class="">{{ reason.icon }}</div>
        <h3 class="text-md mb-6 font-bold text-lg">{{ reason.title }}</h3>
        <p>{{ reason.subtitle }}</p>
      </div>
    </section>
  </section>
</template>

<script setup>
const why = [
  {
    title: 'Home-Cooked Authenticity',
    subtitle: `We don't do 'fast food.' Every meal is prepared with fresh ingredients and the same care as a Sunday family dinner.`,
    icon: '',
  },
  {
    title: 'Punctual Office Delivery',
    subtitle: `Hunger doesn't wait, and neither do we. Get your lunch delivered hot and exactly when you need it, no stories.`,
    icon: '',
  },
  {
    title: 'Transparent Tracking',
    subtitle: `Stop wondering where your food is. Track your order from our kitchen to your doorstep in real-time.`,
    icon: '',
  },
]
</script>
