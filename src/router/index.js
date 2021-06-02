import { createWebHistory, createRouter } from 'vue-router'
import SmartManual from '../views/SmartManualPage'
import Home from '../views/HomePage'
import ReportPage from '../views/ReportPage'
import RepairPage from '../views/RepairPage'
import ELearning from '../views/ELearning'
import ThankyouPage from '../views/ThankyouPage'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'ELearning',
    path: '/elearning',
    component: ELearning,
  },
  {
    name: 'SmartManual',
    path: '/manual',
    component: SmartManual,
  },
  {
    name: 'RepairPage',
    path: '/manual/:id',
    component: RepairPage,
  },
  {
    name: 'ReportPage',
    path: '/report',
    component: ReportPage,
  },
  {
    name: 'Thankyou',
    path: '/thankyou',
    component: ThankyouPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-success',
  linkExactActiveClass: 'text-success',
  routes,
})

export default router
