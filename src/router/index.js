import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Destinations from '@/views/Destinations.vue'
import DestinationsMap from '@/views/DestinationsMap.vue'
import RoutesMap from '@/views/RoutesMap.vue'
import Routes from '@/views/Routes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: Destinations
    },
    {
      path: '/destinations-map',
      name: 'destinations-map',
      component: DestinationsMap
    },
    {
      path: '/routes',
      name: 'routes',
      component: Routes
    },
    {
      path: '/routes-map',
      name: 'routes-map',
      component: RoutesMap
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
