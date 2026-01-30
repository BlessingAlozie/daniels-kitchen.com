import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    isCartOpen: false,
  }),
  getters: {
    totalQuantity: (state) => {
      return state.cartItems.reduce((sum, food) => sum + food.quantity, 0)
    }
  },

  actions: {
    addFoodToCart(food) {
      // check if food already exist
      const existing = this.cartItems.find(item => item.id === food.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cartItems.push({ ...food, quantity: 1 })
      }
    },

    removeFoodFromCart(foodId) {
      this.cartItems = this.cartItems.filter(item => item.id !== foodId)
    },

    increaseFoodQuantity(foodId) {
      const food = this.cartItems.find(item => item.id === foodId)
      if (food) {
        food.quantity++
      }
    },

    decreaseFoodQuantity(foodId) {
      const food = this.cartItems.find(item => item.id === foodId)
      if (food && food.quantity > 1) {
        food.quantity--
      }
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    openCart() {
      this.isCartOpen = true
    },
    closeCart() {
      this.isCartOpen = false
    }
  }


})


