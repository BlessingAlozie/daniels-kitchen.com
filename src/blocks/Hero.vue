<template>
  <section class="w-full bg-white py-12 lg:py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <!-- Left Content -->
      <div class="flex-1 text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Homemade Taste,<br />
          <span class="text-red-600">Delivered</span> in<br />
          Minutes
        </h1>
        <p class="mt-6 text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
          Freshly cooked lunch and dinner from Daniel's Kitchen straight to your office or home.
        </p>
        <button
          class="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto lg:mx-0 transition-colors"
        >
          Explore Menu
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.31 7 20 9.69 20 13V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V13C4 9.69 6.69 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2ZM6 13V20H18V13C18 10.79 16.21 9 14 9H10C7.79 9 6 10.79 6 13Z"
            />
          </svg>
        </button>
      </div>

      <!-- Right Content - Animated Food Plate -->
      <div class="flex-1 relative flex justify-center items-center">
        <!-- Main Plate Container -->
        <div
          class="relative w-[400px] h-[400px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px]"
        >
          <!-- Decorative Plate Image -->
          <div class="absolute inset-0 rounded-full overflow-hidden">
            <!-- <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop"
              alt="Decorative plate"
              class="w-full h-full object-cover opacity-0"
            /> -->
            <!-- Plate Design Overlay -->
            <div
              class="absolute inset-0 rounded-full"
              style="
                background: radial-gradient(
                    circle at center,
                    transparent 75%,
                    #f5f5f4 76%,
                    #f5f5f4 78%,
                    transparent 79%
                  ),
                  radial-gradient(
                    circle at center,
                    transparent 82%,
                    #d4af37 83%,
                    #ffd700 85%,
                    #b8860b 87%,
                    #d4af37 89%,
                    transparent 90%
                  ),
                  radial-gradient(circle at center, #ffffff 100%, transparent 100%);
                box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 50px rgba(0, 0, 0, 0.15);
              "
            ></div>
            <!-- Gold Beaded Ring -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color: #ffd700" />
                  <stop offset="50%" style="stop-color: #b8860b" />
                  <stop offset="100%" style="stop-color: #ffd700" />
                </linearGradient>
              </defs>
              <!-- Beads around the plate -->
              <g v-for="i in 60" :key="i">
                <circle
                  :cx="100 + 88 * Math.cos(((i * 6 - 90) * Math.PI) / 180)"
                  :cy="100 + 88 * Math.sin(((i * 6 - 90) * Math.PI) / 180)"
                  r="3"
                  fill="url(#goldGradient)"
                  class="drop-shadow-sm"
                />
              </g>
            </svg>
          </div>

          <!-- Main Food Image Container -->
          <div class="absolute inset-[15%] rounded-full overflow-hidden shadow-inner">
            <transition :name="transitionName" mode="out-in">
              <img
                :key="currentIndex"
                :src="foods[currentIndex].image"
                :alt="foods[currentIndex].name"
                class="w-full h-full object-cover"
              />
            </transition>
          </div>

          <!-- Orbiting Small Circles Container -->
          <div
            class="absolute inset-0 orbit-container"
            :style="{ animationDuration: orbitSpeed + 's' }"
          >
            <!-- Small Circle 1 -->
            <div
              class="absolute w-20 h-20 md:w-24 md:h-24 orbit-item"
              style="top: -8%; left: 50%; transform: translateX(-50%)"
            >
              <div
                class="w-full h-full rounded-full bg-white p-1 shadow-xl overflow-hidden"
                style="border: 4px solid #d4af37"
              >
                <transition name="fade" mode="out-in">
                  <img
                    :key="orbitIndex1"
                    :src="foods[orbitIndex1].image"
                    :alt="foods[orbitIndex1].name"
                    class="w-full h-full object-cover rounded-full"
                  />
                </transition>
              </div>
            </div>

            <!-- Small Circle 2 -->
            <div
              class="absolute w-16 h-16 md:w-20 md:h-20 orbit-item"
              style="top: 50%; right: -8%; transform: translateY(-50%)"
            >
              <div
                class="w-full h-full rounded-full bg-white p-1 shadow-xl overflow-hidden"
                style="border: 4px solid #d4af37"
              >
                <transition name="fade" mode="out-in">
                  <img
                    :key="orbitIndex2"
                    :src="foods[orbitIndex2].image"
                    :alt="foods[orbitIndex2].name"
                    class="w-full h-full object-cover rounded-full"
                  />
                </transition>
              </div>
            </div>

            <!-- Small Circle 3 -->
            <div
              class="absolute w-18 h-18 md:w-22 md:h-22 orbit-item"
              style="bottom: -5%; left: 50%; transform: translateX(-50%); width: 72px; height: 72px"
            >
              <div
                class="w-full h-full rounded-full bg-white p-1 shadow-xl overflow-hidden"
                style="border: 4px solid #d4af37"
              >
                <transition name="fade" mode="out-in">
                  <img
                    :key="orbitIndex3"
                    :src="foods[orbitIndex3].image"
                    :alt="foods[orbitIndex3].name"
                    class="w-full h-full object-cover rounded-full"
                  />
                </transition>
              </div>
            </div>

            <!-- Small Circle 4 -->
            <div
              class="absolute w-14 h-14 md:w-18 md:h-18 orbit-item"
              style="top: 50%; left: -6%; transform: translateY(-50%); width: 64px; height: 64px"
            >
              <div
                class="w-full h-full rounded-full bg-white p-1 shadow-xl overflow-hidden"
                style="border: 4px solid #d4af37"
              >
                <transition name="fade" mode="out-in">
                  <img
                    :key="orbitIndex4"
                    :src="foods[orbitIndex4].image"
                    :alt="foods[orbitIndex4].name"
                    class="w-full h-full object-cover rounded-full"
                  />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const foods = [
  {
    name: 'Rolls',
    image:
      'https://image2url.com/r2/default/images/1769293361082-6f06152f-ccda-4768-b37a-6d7a431c9097.jpeg',
  },
  {
    name: 'Okro Soup',
    image:
      'https://image2url.com/r2/default/images/1769293626353-82e97ab5-4918-4663-92cf-547bca0257c7.jpeg',
  },
  {
    name: 'Beans',
    image:
      'https://image2url.com/r2/default/images/1769293288526-0e86ffb5-b837-4a13-965a-83a9f2596f67.jpeg',
  },
  {
    name: 'Jollof Rice',
    image:
      'https://image2url.com/r2/default/images/1769293223962-4feabeb8-facc-4bca-8558-bf3384c29134.jpeg',
  },
  {
    name: 'Egusi Soup',
    image:
      'https://image2url.com/r2/default/images/1769293106573-b27e1a24-7073-4273-9f6d-be70ef60e237.jpeg',
  },
]

const currentIndex = ref(0)
const transitionName = ref('slide-spin')
const orbitSpeed = ref(60) // Seconds for full orbit rotation

// Computed indices for orbiting circles (offset from main)
const orbitIndex1 = computed(() => (currentIndex.value + 1) % foods.length)
const orbitIndex2 = computed(() => (currentIndex.value + 2) % foods.length)
const orbitIndex3 = computed(() => (currentIndex.value + 3) % foods.length)
const orbitIndex4 = computed(() => (currentIndex.value + 4) % foods.length)

let interval = null

const transitions = ['slide-spin', 'slide-left', 'spin-in']

const nextFood = () => {
  // Randomly pick a transition
  transitionName.value = transitions[Math.floor(Math.random() * transitions.length)]
  currentIndex.value = (currentIndex.value + 1) % foods.length
}

onMounted(() => {
  // Change food every 4 seconds (for demo, you can change to 60000 for 1 minute)
  interval = setInterval(nextFood, 4000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
/* Slide from right with spin */
.slide-spin-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-spin-leave-active {
  transition: all 0.5s ease-in;
}
.slide-spin-enter-from {
  opacity: 0;
  transform: translateX(100%) rotate(180deg) scale(0.5);
}
.slide-spin-leave-to {
  opacity: 0;
  transform: translateX(-50%) rotate(-90deg) scale(0.5);
}

/* Slide from right */
.slide-left-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-left-leave-active {
  transition: all 0.5s ease-in;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Spin in */
.spin-in-enter-active {
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.spin-in-leave-active {
  transition: all 0.5s ease-in;
}
.spin-in-enter-from {
  opacity: 0;
  transform: rotate(360deg) scale(0);
}
.spin-in-leave-to {
  opacity: 0;
  transform: rotate(-180deg) scale(0);
}

/* Simple fade for small circles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Orbiting animation for small circles */
.orbit-container {
  animation: orbit linear infinite;
}

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Counter-rotate the items so they stay upright */
.orbit-item {
  animation: counter-orbit linear infinite;
  animation-duration: inherit;
}

@keyframes counter-orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* Adjust counter-rotation for items with existing transforms */
.orbit-item:nth-child(1) {
  animation: counter-orbit-translateX linear infinite;
  animation-duration: inherit;
}

.orbit-item:nth-child(2) {
  animation: counter-orbit-translateY linear infinite;
  animation-duration: inherit;
}

.orbit-item:nth-child(3) {
  animation: counter-orbit-translateX linear infinite;
  animation-duration: inherit;
}

.orbit-item:nth-child(4) {
  animation: counter-orbit-translateY linear infinite;
  animation-duration: inherit;
}

@keyframes counter-orbit-translateX {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(-360deg);
  }
}

@keyframes counter-orbit-translateY {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(-360deg);
  }
}
</style>
