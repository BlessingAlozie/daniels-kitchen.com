<template>
  <section class="w-full bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- LEFT: Checkout Form -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Delivery Information -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Delivery Information</h3>
            <div class="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 border-gray-300 focus:ring-black"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 border-gray-300 focus:ring-black"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 border-gray-300 focus:ring-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule Delivery -->
          <div>
            <h3 class="text-xl font-semibold mb-1">Schedule Delivery</h3>
            <small class="mb-4">(Only if you don't need your order immediately)</small>

            <div class="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Delivery Date</label>
                <input
                  type="date"
                  class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 border-gray-300 focus:ring-black"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Note</label>
                <textarea
                  rows="3"
                  placeholder="Add a delivery note (optional)"
                  class="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 border-gray-300 focus:ring-black"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Payment Method</h3>
            <div class="bg-white md:flex md:itms-center rounded-lg shadow-sm p-6 justify-between">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="accent-red-600" />
                <span>Bank Transfer</span>
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="accent-red-600" />
                <span>Cash on Delivery</span>
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" class="accent-red-600" />
                <span>POS on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        <!-- RIGHT: Order Summary -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Order Summary</h3>
          <div class="bg-white rounded-lg shadow-sm p-6 space-y-4 sticky top-24">
            <div class="text-sm text-gray-600">Items in cart</div>

            <div class="border-t pt-4">
              <!-- Cart items -->
              <div
                v-for="foodItem in theCart.cartItems"
                :key="foodItem.id"
                class="flex gap-4 py-4 border-b border-gray-200"
              >
                <img :src="foodItem.image" class="w-22 h-22 rounded object-cover" />

                <div class="flex-1">
                  <p class="font-medium">{{ foodItem.name }}</p>
                  <p class="text-l text-gray-500">₦{{ foodItem.price }}</p>

                  <div class="flex items-center gap-3 mt-2">
                    <button
                      @click="theCart.decreaseFoodQuantity(foodItem.id)"
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span>{{ foodItem.quantity }}</span>
                    <button
                      @click="theCart.increaseFoodQuantity(foodItem.id)"
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <PhX
                  class="cursor-pointer text-gray-400 hover:text-red-500"
                  @click="theCart.removeFoodFromCart(foodItem.id)"
                />
              </div>
              <div class="mt-20">
                <div class="pt-4">
                  <div class="relative">
                    <p>Subtotal:</p>
                    <strong class="absolute top-0 right-0"> ₦{{ theCart.subTotal }}</strong>
                  </div>
                </div>
                <div class="pt-4">
                  <div class="relative">
                    <p>Delivery Fee:</p>
                    <p class="absolute top-0 right-0">0.00</p>
                  </div>
                </div>
                <div class="pt-4">
                  <div class="relative">
                    <p>Total:</p>
                    <strong class="absolute top-0 right-0"> ₦{{ theCart.subTotal }}</strong>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useCartStore } from '@/stores/cart'
const theCart = useCartStore()
</script>