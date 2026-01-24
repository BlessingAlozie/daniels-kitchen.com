<template>
  <section class="w-full bg-white py-16">
    <!-- Header -->
    <div class="max-w-7xl mx-auto text-center px-4 mb-12">
      <h1 class="text-4xl md:text-5xl text-black font-bold mb-4">
        From Our <span class="text-red-600">Blog</span>
      </h1>
      <p class="text-base text-gray-600 max-w-xl mx-auto">
        Insights on nutrition, healthy eating, and food choices for a better lifestyle.
      </p>
    </div>

    <!-- Blog Cards Grid -->
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- Meta -->
            <div class="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke-width="2" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke-width="2" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke-width="2" />
                </svg>
                <span>{{ post.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2" />
                  <line x1="9" y1="3" x2="9" y2="21" stroke-width="2" />
                </svg>
                <span>{{ post.readTime }}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-lg text-black mb-2 leading-tight">
              {{ post.title }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-gray-500 mb-4 leading-relaxed">
              {{ post.description }}
            </p>

            <!-- Read More -->
            <a
              href="#"
              class="inline-flex items-center gap-1 text-red-600 font-medium text-sm hover:text-red-700 transition-colors"
            >
              Read More
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    date: 'February 5, 2026',
    readTime: '2 mins Read',
    title: 'Top 5 Foods to Boost Your Energy',
    description: 'Discover the best meals to keep you active and energized throughout the day.',
  },
  {
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    date: 'February 5, 2026',
    readTime: '2 mins Read',
    title: 'Top 5 Foods to Boost Your Energy',
    description: 'Discover the best meals to keep you active and energized throughout the day.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    date: 'February 5, 2026',
    readTime: '2 mins Read',
    title: 'Top 5 Foods to Boost Your Energy',
    description: 'Discover the best meals to keep you active and energized throughout the day.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    date: 'February 5, 2026',
    readTime: '2 mins Read',
    title: 'Top 5 Foods to Boost Your Energy',
    description: 'Discover the best meals to keep you active and energized throughout the day.',
  },
]
</script>
