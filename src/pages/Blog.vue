<template>
  <section class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Modal Card -->
    <div class="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6">
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p class="text-gray-600 mb-6">This is a simple modal design. You can put anything here.</p>

      <div class="flex justify-end gap-3">
        <button class="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
        <button class="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg">Confirm</button>
      </div>
    </div>
  </section>
</template>
