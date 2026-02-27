import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Index.vue'
import Menu from '../pages/Menu.vue'
import Reviews from '../pages/Reviews.vue'
import Blog from '../pages/Blog.vue'
import Delivery from '@/pages/Delivery.vue'
import FoodDetail from '@/components/FoodDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menu/:slug',
      name: 'FoodDetail',
      component: FoodDetail
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
  ],
})

export default router
