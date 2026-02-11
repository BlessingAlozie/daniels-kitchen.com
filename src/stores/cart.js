import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    isCartOpen: false,



  }),
  getters: {
    totalQuantity: (state) => {
      return state.cartItems.reduce((sum, food) => sum + food.quantity, 0)
    },

    subTotal: (state) => {
      return state.cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)
    },




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

      this.saveCartToLocalStorage()
    },

    removeFoodFromCart(foodId) {
      this.cartItems = this.cartItems.filter(item => item.id !== foodId)
      this.saveCartToLocalStorage()
    },

    increaseFoodQuantity(foodId) {
      const food = this.cartItems.find(item => item.id === foodId)
      if (food) {
        food.quantity++
      }

      this.saveCartToLocalStorage()
    },

    decreaseFoodQuantity(foodId) {
      const food = this.cartItems.find(item => item.id === foodId)
      if (food && food.quantity > 1) {
        food.quantity--
      }
      this.saveCartToLocalStorage()
    },


    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    openCart() {
      this.isCartOpen = true
    },
    closeCart() {
      this.isCartOpen = false
    },

    // initialize local storage
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    loadCartFromLocalStorage() {
      const storedCart = localStorage.getItem('cartItems')
      if (storedCart) this.cartItems = JSON.parse(storedCart)

    }

  }
})


