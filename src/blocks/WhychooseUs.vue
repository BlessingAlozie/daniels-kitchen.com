<template>
  <section class="w-full bg-gray-100 py-16 mt-10 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold text-black mb-4">
          Why Choose <span class="text-red-600">Us ?</span>
        </h2>
        <p class="text-gray-600">
          Because good food should feel like home and arrive right on time.
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Home-Cooked Authenticity -->
        <div class="bg-white rounded-xl p-8 text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-14 h-14 text-green-600"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
            >
              <!-- Bowl -->
              <path
                d="M12 32c0 12 9 20 20 20s20-8 20-20H12z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- Steam lines -->
              <path d="M22 12c0 4 4 6 4 10" stroke-linecap="round" />
              <path d="M32 8c0 4 4 6 4 10" stroke-linecap="round" />
              <path d="M42 12c0 4 4 6 4 10" stroke-linecap="round" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-black mb-3">Home-Cooked Authenticity</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            We don't do 'fast food.' Every meal is prepared with fresh ingredients and the same care
            as a Sunday family dinner.
          </p>
        </div>

        <!-- Punctual Office Delivery -->
        <div class="bg-white rounded-xl p-8 text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-14 h-14 text-green-600"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
            >
              <!-- Clock circle -->
              <circle cx="32" cy="32" r="24" />
              <!-- Clock hands -->
              <path d="M32 16v16l10 6" stroke-linecap="round" stroke-linejoin="round" />
              <!-- Small dots around -->
              <circle cx="32" cy="10" r="2" fill="currentColor" />
              <circle cx="54" cy="32" r="2" fill="currentColor" />
              <circle cx="32" cy="54" r="2" fill="currentColor" />
              <circle cx="10" cy="32" r="2" fill="currentColor" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-black mb-3">Punctual Office Delivery</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Hunger doesn't wait, and neither do we. Get your lunch delivered hot and exactly when
            you need it, no stories.
          </p>
        </div>

        <!-- Transparent Tracking -->
        <div class="bg-white rounded-xl p-8 text-center">
          <div class="flex justify-center mb-4">
            <svg class="w-14 h-14" viewBox="0 0 64 64" fill="none" stroke-width="4">
              <!-- Outer pin -->
              <path
                d="M32 4C20 4 12 14 12 24c0 14 20 36 20 36s20-22 20-36c0-10-8-20-20-20z"
                stroke="#16a34a"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- Inner circle -->
              <circle cx="32" cy="24" r="8" stroke="#dc2626" stroke-linecap="round" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-black mb-3">Transparent Tracking</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Stop wondering where your food is. Track your order from our kitchen to your doorstep in
            real-time.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
