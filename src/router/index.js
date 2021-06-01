import { createWebHistory, createRouter } from 'vue-router'
import SmartManual from '../views/SmartManualPage'
import Home from '../views/HomePage'
import Report from '../views/Report'
import ELearning from '../views/ELearning'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: "ELearning",
    path: "/elearning",
    component: ELearning
  },
  {
    name: 'SmartManual',
    path: '/manual',
    component: SmartManual,
  },
  {
    name: 'Report',
    path: '/report',
    component: Report,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-success',
  linkExactActiveClass: 'text-success',
  routes,
})

export default router
