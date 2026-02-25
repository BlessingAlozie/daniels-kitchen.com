<template>
  <section class="w-full bg-gray-50 py-16">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <!-- Heading -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold font-[Manrope]">Like Our Service?</h2>
        <p class="text-gray-600 mt-2">Leave feedback and let us know your experience.</p>
      </div>

      <!-- Form -->
      <form class="space-y-6">
        <!-- Full Name -->
        <div>
          <label class="block text-sm font-medium mb-2"> Full Name </label>
          <input
            type="text"
            placeholder="Enter your full name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <!-- Position -->
        <div>
          <label class="block text-sm font-medium mb-2"> Position </label>
          <input
            type="text"
            placeholder="Your job title"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <!-- Organization -->
        <div>
          <label class="block text-sm font-medium mb-2"> Organization </label>
          <input
            type="text"
            placeholder="Company or organization"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <!-- Rating -->
        <div>
          <label class="block text-sm font-medium mb-2"> Rate Us </label>

          <div class="flex gap-2 text-yellow-400">
            <PhStar
              v-for="star in 5"
              :key="star"
              :size="28"
              weight="fill"
              class="cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>

        <!-- Feedback -->
        <div>
          <label class="block text-sm font-medium mb-2"> Write Your Feedback </label>
          <textarea
            rows="4"
            placeholder="Share your experience..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { PhStar } from '@phosphor-icons/vue'
</script>
