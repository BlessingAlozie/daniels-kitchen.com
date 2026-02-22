<template>
  <section
    class="w-full min-h-screen bg-cover bg-no-repeat bg-center"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div
      class="max-w-7xl mx-auto px-4 md:px-6 z-10 min-h-screen flex flex-col justify-center items-start"
    >
      <h1
        class="text-white font-['Manrope'] text-4xl md:text-5xl font-medium leading-none max-w-2xl"
      >
        What Our Customers Say About
        <span class="text-[var(--color-primary)]">Daniel’s Kitchen</span>
      </h1>
      <p class="text-white font-['Manrope'] max-w-xl mt-4 text-lg leading-relaxed">
        Every review comes from real customers who ordered, tasted, and experienced our meals ,
        here’s their honest feedback on quality, freshness, and delivery.
      </p>
      <button
        class="mt-8 bg-[color:var(--color-primary)] font-['Manrope'] hover:bg-[color:var(--primary-hover)] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
      >
        Get Yours Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path
            d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
const heroImage = '/images/BackgroundImage.png'
</script>

