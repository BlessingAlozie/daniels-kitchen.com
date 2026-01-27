<template>
  <div class="h-[350px] rounded-xl shadow-lg flex flex-col">
    <!-- Food Image -->
    <div
      class="h-2/3 rounded-t-xl bg-cover bg-center"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <!-- Food Info -->
    <div class="p-4 text-black flex flex-col justify-between flex-1">
      <div class="name flex justify-between">
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <h3 class="total-amount text-green-500">₦{{ price }}</h3>
      </div>

      <!-- Quantity + Add button -->
      <div class="mt-2 pt-4 pb-6 flex items-center justify-between text-center">
        <div class="quantity flex gap-2 bg-white/20 px-2 py-1 rounded-md">
          <button
            class="px-2 text-lg w-6 h-8 border border-green-500 rounded py-1 cursor-pointer text-center font-bold"
            @click="decrease"
          >
            -
          </button>
          <span>{{ quantity }}</span>
          <button
            class="px-2 w-6 h-8 text-bold max-w-30px border border-green-500 rounded py-1 text-center cursor-pointer"
            @click="increase"
          >
            +
          </button>
        </div>
        <button
          class="addBTN bg-green-500 text-white px-6 py-2 text-center rounded-full hover:bg-red-600 transition"
          @click="addToCart"
        >
          <i class="fa-solid fa-basket-shopping text-md mr-2"></i>
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'

/* props */
const props = defineProps({
  name: String,
  price: Number,
  image: String,
})

/* emits */
const emit = defineEmits(['add-to-cart'])

/* local state */
const quantity = ref(1)

/* methods */
const increase = () => {
  quantity.value++
}
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}
const addToCart = () => {
  emit('add-to-cart', {
    name: props.name,
    price: props.price,
    quantity: quantity.value,
  })
}

const img =
  'https://image2url.com/r2/default/images/1769120124455-c94ede40-e3be-43b6-afa2-5d8099c4136e.jpeg'
</script>

<style scope>
.total-amount {
  font-weight: 800;
}
.quantity {
  align-content: center;
  align-items: center;
  font-weight: 6 00;
}
</style>