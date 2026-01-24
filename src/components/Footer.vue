<template>
  <footer class="w-full bg-gray-100">
    <!-- Top Section - Newsletter -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-gray-300"
      >
        <!-- Logo -->
        <div class="flex items-center gap-4">
          <div class="text-left">
            <span class="text-red-600 text-2xl font-bold italic">Daniel's</span>
            <span class="block text-black text-lg font-semibold">Kitchen</span>
          </div>
          <div class="hidden lg:block w-px h-12 bg-gray-300"></div>
        </div>

        <!-- Subscribe Section -->
        <div class="flex flex-col md:flex-row md:items-center gap-4 lg:gap-8">
          <div>
            <h3 class="font-bold text-black text-lg">Subscribe to stay updated</h3>
            <p class="text-xs text-gray-500">
              Get the latest food tips, health insights, and updates straight to your inbox.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <div class="relative">
              <svg
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter Email Address"
                class="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:border-red-500 bg-white"
              />
            </div>
            <button
              class="bg-green-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
            >
              Subscribe
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Middle Section - Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        <!-- Company Info -->
        <div>
          <p class="text-gray-600 text-sm mb-4">
            Fast, reliable food delivery bringing fresh meals to your doorstep.
          </p>
          <!-- Social Icons -->
          <div class="flex items-center gap-4 mb-6">
            <a href="#" class="text-black hover:text-red-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="#" class="text-black hover:text-red-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href="#" class="text-black hover:text-red-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <a href="#" class="text-black hover:text-red-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
          <!-- Hours -->
          <div class="flex items-center gap-2 text-red-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <path stroke-linecap="round" stroke-width="2" d="M12 6v6l4 2" />
            </svg>
            <span class="font-semibold">8:00AM - 5:00PM</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-black text-lg mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Menu</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Special Menu</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Contact Us</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Blog</a
              >
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-bold text-black text-lg mb-4">Resources</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >FAQs</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Nutrition Blog</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-red-600 text-sm transition-colors"
                >Terms & Conditions</a
              >
            </li>
          </ul>
        </div>

        <!-- Get In Touch -->
        <div>
          <h4 class="font-bold text-black text-lg mb-4">Get In Touch</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <svg
                class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-gray-600 text-sm"
                >12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</span
              >
            </li>
            <li class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-gray-600 text-sm">support@daniel's.com</span>
            </li>
            <li class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-gray-600 text-sm">+234 814 882 1294</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="border-t border-gray-300 py-6">
      <p class="text-center text-gray-600 text-sm">
        &copy; {{ date }} Daniel's Kitchen. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Footer component for Daniel's Kitchen
const date = new Date().getFullYear()
</script>
