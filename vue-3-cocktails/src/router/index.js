import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/drink/:id',
      name: 'drinkDetail',
      component: () => import('../views/DrinkDetail.vue'),
    },
  ],
})
