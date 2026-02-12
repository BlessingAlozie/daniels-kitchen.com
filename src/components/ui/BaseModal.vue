<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div class="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl p-8 relative animate-scale">
        <!-- Close Button -->
        <button
          @click="$emit('update:modelValue', false)"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>

        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <div
            :class="[
              'w-14 h-14 flex items-center justify-center rounded-full',
              type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
            ]"
          >
            <span v-if="type === 'success'">✔</span>
            <span v-else>✖</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold text-center mb-2">
          {{ type === 'success' ? 'Success!' : 'Something went wrong' }}
        </h3>

        <!-- Message -->
        <p class="text-gray-500 text-center mb-6">
          {{ message }}
        </p>

        <!-- Button -->
        <button
          @click="$emit('update:modelValue', false)"
          :class="[
            'w-full py-3 rounded-lg font-medium transition',
            type === 'success'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white',
          ]"
        >
          Close
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  type: {
    type: String,
    default: 'success',
  },
  message: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-scale {
  animation: scaleIn 0.2s ease;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
