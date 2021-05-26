import { createWebHistory, createRouter } from 'vue-router'
import SmartManual from '../views/SmartManualPage'
import Home from '../views/HomePage'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'SmartManual',
    path: '/manual',
    component: SmartManual,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
