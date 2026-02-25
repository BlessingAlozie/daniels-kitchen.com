<template>
  <section class="w-full bg-white">
    <div class="max-w-7xl mx-auto flex flex-cols py-20 items-center justify-center">
      <span class="-scale-x-100"
        ><!-- Quote -->
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.704-4.005 3.86-3.965"
            class="text-[var(--color-primary)]"
          />
        </svg>
      </span>
      <h1 class="font-[Manrope] text-4xl font-bold pt-8">Customers Testimonials</h1>
    </div>
    <section
      class="max-w-7xl md:px-4 mx-auto grid smgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
    >
      <TestimonialCard
        v-for="review in Testimonials"
        :key="review.name"
        :name="review.name"
        :rating="review.rating"
        :review="review.review"
        :position="review.position"
        :company="review.company"
      />
    </section>
  </section>
</template>

<script setup>
import TestimonialCard from '@/components/TestimonialCard.vue'

const Testimonials = [
  {
    name: 'Faith Onyibuchi',
    rating: 5,
    review:
      'Daniel’s Kitchen has truly made my daily routine smoother and less stressful. After long hours at work, knowing I can count on fresh, well-packaged meals delivered right on time gives me peace of mind. The flavors are always rich, satisfying, and consistent every single time.',
    position: 'Product Designer',
    company: 'NovaTech Solutions',
  },
  {
    name: 'Chinedu Eze',
    rating: 4,
    review:
      'Daniel’s Kitchen has brought so much convenience into my busy schedule. After exhausting workdays, having fresh, neatly packaged meals delivered promptly feels like such a relief. The taste is consistently delicious, and the rice dishes are always perfectly prepared and satisfying.',
    position: 'Software Engineer',
    company: 'ByteWorks',
  },
  {
    name: 'Amaka Okoye',
    rating: 5,
    review:
      'Daniel’s Kitchen has honestly made my life much easier and more organized. After long workdays, knowing I can get fresh, properly packaged meals delivered on time gives me comfort. The meals are flavorful, filling, and always prepared with impressive consistency and care.',
    position: 'HR Manager',
    company: 'GreenNest Consulting',
  },
  {
    name: 'Tolu Adeyemi',
    rating: 4,
    review:
      'Daniel’s Kitchen has simplified my evenings in the best possible way. After demanding hours at the office, receiving fresh, carefully packaged meals right on schedule feels incredibly convenient. Every order tastes delicious, balanced, and consistently prepared with noticeable attention to detail.',
    position: 'Marketing Lead',
    company: 'BrightEdge Media',
  },
  {
    name: 'Ifeanyi Nwosu',
    rating: 5,
    review:
      'Daniel’s Kitchen has become my trusted solution during hectic workweeks. After long days filled with meetings, getting fresh, well-packaged meals delivered promptly is such a comfort. The quality is reliable, the portions are generous, and the flavors are always satisfying.',
    position: 'Business Analyst',
    company: 'CoreAnalytics',
  },
  {
    name: 'Blessing Umeh',
    rating: 5,
    review:
      'Daniel’s Kitchen has taken so much pressure off my daily routine. After full work schedules, having fresh, properly packaged meals delivered on time makes everything easier. The dishes are consistently flavorful, well-portioned, and prepared with great attention to quality and taste.',
    position: 'Operations Manager',
    company: 'UrbanHive Logistics',
  },
  {
    name: 'Samuel Adekunle',
    rating: 4,
    review:
      'Daniel’s Kitchen has added real convenience to my professional lifestyle. After long hours at work, receiving fresh, neatly packaged meals exactly on time feels reassuring. The flavors are rich, the ingredients taste fresh, and every order meets my expectations consistently.',
    position: 'Financial Consultant',
    company: 'PrimeLedger Group',
  },
  {
    name: 'Ngozi Obi',
    rating: 5,
    review:
      'Daniel’s Kitchen has made balancing work and meals incredibly simple. After packed schedules and long afternoons, having fresh, carefully packaged meals delivered promptly feels wonderful. The food is always flavorful, well-prepared, and consistently meets a high standard of quality.',
    position: 'Wellness Coach',
    company: 'VitalLife Studio',
  },
  {
    name: 'David Alabi',
    rating: 4,
    review:
      'Daniel’s Kitchen has become a dependable part of my weekly routine. After demanding days at the office, getting fresh, properly packaged meals delivered on time is truly reassuring. The dishes are consistently tasty, satisfying, and prepared with impressive attention to detail.',
    position: 'Project Manager',
    company: 'Skyline Developments',
  },
]
</script>

