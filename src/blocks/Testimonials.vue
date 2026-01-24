<template>
  <section class="w-full bg-gray-100 mt-10 pt-20 pb-10">
    <!-- Header -->
    <div class="max-w-7xl mx-auto text-center px-4">
      <h1 class="text-4xl md:text-5xl text-black font-bold mb-4">
        Why Choose <span class="text-red-600">Us?</span>
      </h1>
      <p class="text-base text-gray-600 max-w-xl mx-auto">
        Because good food should feel like home and arrive right on time.
      </p>
    </div>

    <!-- Reviews Carousel -->
    <div class="max-w-7xl mx-auto py-10 px-4">
      <div ref="splideRef" class="splide">
        <div class="splide__track pb-16">
          <ul class="splide__list">
            <li v-for="(review, index) in reviews" :key="index" class="splide__slide px-3">
              <div class="relative shadow-lg rounded-lg p-4 bg-white text-left h-full">
                <!-- Quote -->
                <svg class="w-10 h-10 mb-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                  />
                </svg>

                <!-- Stars -->
                <div class="flex gap-1 mb-3">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <!-- Review -->
                <p class="text-sm text-gray-700 mb-4">
                  {{ review.desc }}
                </p>

                <!-- User -->
                <div class="flex items-center gap-3">
                  <img
                    :src="review.picture"
                    class="w-10 h-10 rounded-full object-cover"
                    :alt="review.name"
                  />
                  <span class="font-semibold text-sm">{{ review.name }}</span>
                </div>

                <!-- Decorative Circle -->
                <img
                  src="/icons/reviews/ellipse.png"
                  class="absolute right-0 bottom-0 w-16"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'

const splideRef = ref(null)
let splideInstance = null

const reviews = [
  {
    name: 'Sarah A.',
    picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    desc: "The delivery was super fast and the food arrived hot and fresh. The entire process was smooth, and I'll definitely be ordering again.",
  },
  {
    name: 'Michael T.',
    picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    desc: "Incredible flavors and generous portions! The packaging kept everything intact. Best food delivery experience I've had in years.",
  },
  {
    name: 'Emily R.',
    picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    desc: 'I love how easy the ordering process is. The app is intuitive and the food quality is consistently excellent. Highly recommend!',
  },
  {
    name: 'James L.',
    picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    desc: 'Perfect for busy weeknights! The variety of restaurants available is amazing, and the delivery drivers are always friendly.',
  },
  {
    name: 'Sophia M.',
    picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    desc: 'Finally found a service that delivers food exactly as it should be. No more soggy fries or cold burgers. Thank you!',
  },
  {
    name: 'David K.',
    picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    desc: 'The customer service is top-notch. Had an issue once and it was resolved immediately. Will keep using this service!',
  },
]

onMounted(() => {
  if (splideRef.value) {
    splideInstance = new Splide(splideRef.value, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      gap: '1rem',
      pagination: true,
      arrows: true,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        },
      },
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
    })
    splideInstance.mount({ AutoScroll })
  }
})

onBeforeUnmount(() => {
  if (splideInstance) {
    splideInstance.destroy()
  }
})
</script>

<style>
.splide__slide {
  height: auto;
}

.splide__pagination__page {
  background: #fecaca;
  opacity: 1;
  width: 12px; /* default is 8px */
  height: 12px; /* default is 8px */
}

.splide__pagination__page.is-active {
  background: #dc2626;
}
/* Arrow buttons */
.splide__arrow {
  background: #22c55e;
  opacity: 1;
}

.splide__arrow:hover {
  background: #b91c1c;
}

/* Arrow icon (the SVG inside) */
.splide__arrow svg {
  fill: #ffffff;
}
</style>
