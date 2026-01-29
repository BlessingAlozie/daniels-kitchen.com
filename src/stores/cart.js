import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),

  getters: {
    totalItems(cartState) {
      return cartState.cartItems.length
    }
  },

  actions: {
    addFoodToCart(food) {
      this.cartItems.push(food)
    }
  }

})
