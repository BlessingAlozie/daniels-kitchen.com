<template>
  <div class="h-[350px] shadow-lg flex relative rounded-2xl flex-col">
    <!-- Food Image -->
    <div
      class="h-2/3 bg-cover rounded-xl relative bg-center"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <!-- Food Info -->
    <div
      class="p-4 text-black flex flex-col justify-between absolute rounded-b-2xl rounded-t-3xl bottom-0 left-0 right-0 bg-white flex-1"
    >
      <div class="name flex justify-between pb-2">
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <h3 class="total-amount text-[color:var(--color-primary)]">₦{{ totalPrice }}</h3>
      </div>
      <p class="text-sm text-gray-700">
        Fresh okra simmered in rich palm oil sauce with assorted meat, ...
      </p>
      <!-- Quantity + Add button -->
      <div class="pt-4 pb-4 flex items-center justify-between">
        <div class="quantity flex gap-2 bg-white/20 py-1 rounded-md">
          <button
            class="px-2 w-8 h-8 text-bold max-w-30px border-0 bg-[#EEF0EE] rounded text-center cursor-pointer"
            @click="decrease"
          >
            -
          </button>
          <span>{{ quantity }}</span>
          <button
            class="px-2 w-8 h-8 text-bold max-w-30px border-0 bg-[#EEF0EE] rounded text-center cursor-pointer"
            @click="increase"
          >
            +
          </button>
        </div>
        <button
          class="cursor-pointer bg-[color:var(--color-primary)] text-white px-6 py-2 text-center flex items-center justify-center hover:bg-[color:var(--primary-hover)] rounded-full transition"
          @click="addToCart"
        >
          <PhShoppingCartSimple :size="24" weight="fill" class="mr-2" />

          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

/* Props passed to the card */
const props = defineProps({
  name: String,
  price: Number,
  image: String,
  // description: String,
})

/* Local quantity state */
const quantity = ref(1)

/* Increase quantity */
const increase = () => {
  quantity.value++
}

/* Decrease quantity */
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}

/* Compute total price for display */
const totalPrice = computed(() => {
  return (props.price * quantity.value).toLocaleString()
})

/* Add item to cart */
const addToCart = () => {
  cart.addFoodToCart({
    id: props.name,
    name: props.name,
    price: props.price,
    image: props.image,
    quantity: quantity.value,
  })

  // reset local quantity to 1 after adding
  quantity.value = 1
}
</script>

<style scoped>
.total-amount {
  font-weight: 800;
}
.quantity {
  align-content: center;
  align-items: center;
  font-weight: 600;
}
</style>
