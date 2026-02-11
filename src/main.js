import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PhosphorIcons from "@phosphor-icons/vue"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PhosphorIcons)

import { useCartStore } from './stores/cart'
const cart = useCartStore()
cart.loadCartFromLocalStorage()  // <--- load saved cart


app.mount('#app')
