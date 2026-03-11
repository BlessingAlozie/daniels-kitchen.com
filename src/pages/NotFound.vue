<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center bg-[#fffdf7] text-center px-6"
  >
    <!-- Animated Food Icon -->

    <div class="animate-bounce mb-6 text-7xl">🍔</div>

    <!-- 404 Number -->

    <h1 class="text-7xl font-extrabold text-[var(--color-primary)] mb-4">404</h1>

    <!-- Message -->

    <h2 class="text-2xl font-semibold mb-3">Oops! This page is not on the menu</h2>

    <p class="text-gray-600 max-w-md mb-8">
      Looks like you tried to order something that doesn't exist. Let's get you back to the kitchen.
    </p>

    <!-- Button -->

    <router-link
      to="/"
      class="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-1 transition"
    >
      Back to Home
    </router-link>

    <!-- Decorative Floating Food -->

    <div class="absolute top-20 left-10 text-4xl animate-float">🍕</div>
    <div class="absolute bottom-20 right-12 text-4xl animate-float delay-200">🍟</div>
    <div class="absolute top-40 right-24 text-3xl animate-float delay-500">🍗</div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
