<template>
  <section class="w-full bg-black py-16 mb-20">
    <div class="max-w-5xl mx-auto text-gray-300 rounded-2xl p-8">
      <!-- Heading -->
      <div class="text-center pb-8">
        <h2 class="text-3xl pb-4 text-white font-bold font-[Manrope]">
          Like Our Service? Leave feedback
        </h2>
        <p class="text-gray-600 mt-2 mb-4">Leave feedback and let us know your experience.</p>
      </div>

      <!-- Form -->
      <form class="space-y-8" @submit.prevent="handleReviewForm">
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium mb-2"> Full Name </label>
            <input
              @input="clearError('name')"
              type="text"
              v-model="reviewForm.name"
              placeholder="Enter your full name"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <p class="text-red-500" v-if="errors.name">{{ errors.name }}</p>
          </div>

          <!-- Position -->
          <div>
            <label class="block text-sm font-medium mb-2"> Position </label>
            <input
              @input="clearError('position')"
              type="text"
              v-model="reviewForm.position"
              placeholder="Your job title"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <p class="text-red-500" v-if="errors.position">{{ errors.position }}</p>
          </div>

          <!-- Organization -->
          <div>
            <label class="block text-sm font-medium mb-2"> Organization </label>
            <input
              @input="clearError('organization')"
              type="text"
              v-model="reviewForm.organization"
              placeholder="Company or organization"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <p class="text-red-500" v-if="errors.organization">{{ errors.organization }}</p>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex gap-4 pt-4">
          <label class="block text-sm font-medium pt-1"> Rate Us: </label>

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
            @input="clearError('feedback')"
            rows="10"
            v-model="reviewForm.feedback"
            placeholder="Share your experience..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          ></textarea>
          <p class="text-red-500" v-if="errors.feedback">{{ errors.feedback }}</p>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-medium cursor-pointer hover:opacity-90 transition"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  </section>
  <BaseModal v-model="showModal" :type="modalType" :message="modalMessage" />
</template>

<script setup>
import { supabase } from '@/lib/supabase'
import { PhStar } from '@phosphor-icons/vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import { ref } from 'vue'

// Modal State
const showModal = ref(false)
const modalType = ref('success')
const modalMessage = ref('')

// Form state
const reviewForm = ref({
  name: '',
  position: '',
  organization: '',
  feedback: '',
})

//  Errors state
const errors = ref({})

// form submisstion function
const submitFeedback = async () => {
  try {
    const feedbackData = { ...reviewForm.value }
    // console.log('Submitting feedback:', feedbackData)

    const { data, error } = await supabase.from('customer_feedback').insert([feedbackData])
    if (error) throw error

    console.log('Feedback submitted successfully:', data)
    // modal display
    modalType.value = 'success'
    modalMessage.value = 'Thank you for your feedback!'
    showModal.value = true

    reviewForm.value = {
      name: '',
      position: '',
      organization: '',
      feedback: '',
    }
    // handle error
  } catch (error) {
    console.error(error)
    modalType.value = 'error'
    modalMessage.value = 'Failed to submit your feedback. Please try again.'
    showModal.value = true
    console.log('Failed to submit')
  }
}

// validate form function
const handleReviewForm = () => {
  errors.value = {} // reset errors

  if (!reviewForm.value.name.trim()) {
    errors.value.name = 'Name is empty'
    console.log('name is empty')
  }

  if (!reviewForm.value.position.trim()) {
    errors.value.position = 'Position is empty'
  }

  if (!reviewForm.value.organization.trim()) {
    errors.value.organization = 'Organization is empty'
  }

  if (!reviewForm.value.feedback.trim()) {
    errors.value.feedback = 'Feedback is empty'
  }

  // If no errors → submit
  if (Object.keys(errors.value).length === 0) {
    submitFeedback()
  }
}

const clearError = (field) => {
  delete errors.value[field]
}
</script>
