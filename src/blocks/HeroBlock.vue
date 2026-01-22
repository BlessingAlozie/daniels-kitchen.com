<template>
  <section class="w-full bg-white">
    <div class="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 px-4">
      <!-- Text -->
      <div class="max-w-xl">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Homemade Taste,
          <span class="text-red-600">Delivered</span> in Minutes
        </h1>

        <p class="text-base md:text-lg text-gray-600 mb-6">
          Freshly cooked lunch and dinner from Daniel's Kitchen straight to your home or office.
        </p>

        <div class="flex gap-4">
          <button class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black transition">
            Order Now
          </button>
          <button class="border border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-50">
            View Menu
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="w-full md:w-1/2 h-full">
        <img
          src="https://image2url.com/r2/default/images/1769029686266-1ddfc247-b263-4c93-b2cd-2607a5af30a7.png"
          alt="Food"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
