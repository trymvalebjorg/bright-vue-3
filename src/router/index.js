import { createWebHistory, createRouter } from 'vue-router'
import Handbook from '../views/SmartManualPage'
import Home from '../views/HomePage'
import ReportPage from '../views/ReportPage'
import RepairPage from '../views/RepairPage'
import ELearningPage from '../views/ELearningPage'
import ThankyouPage from '../views/ThankyouPage'
import NotFoundPage from '../views/'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'ELearningPage',
    path: '/elearning',
    component: ELearningPage,
  },
  {
    name: 'HandBook',
    path: '/handbook',
    component: Handbook,
  },
  {
    name: 'RepairPage',
    path: '/handbook/:id',
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
  { path: '/404', component: NotFoundPage },
  { path: '*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-success',
  linkExactActiveClass: 'text-success',
  routes,
})

export default router
