import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Destinations from '@/views/Destinations.vue'
import DestinationsMap from '@/views/DestinationsMap.vue'
import RoutesMap from '@/views/RoutesMap.vue'
import Routes from '@/views/Routes.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// 检查是否需要重定向
if (typeof window !== 'undefined') {
  const redirect = sessionStorage.getItem('redirect')
  if (redirect) {
    sessionStorage.removeItem('redirect')
    const path = redirect.replace('/jolly-trip', '')
    router.push(path)
  }
}

export default router
