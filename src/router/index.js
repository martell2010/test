import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { SOME_MODULE } from '../modules/some-module/router/index'
import { EXTERNAL_MODULES } from '../load-external-modules';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  SOME_MODULE,
  
  ...EXTERNAL_MODULES,

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,  
})

export default router
