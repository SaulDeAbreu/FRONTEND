import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/msgs',
      name: 'msgs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MsgsView.vue')
    },
    {
      path: '/msgs/:id',
      name: 'msg',
      component: () => import('../views/MsgView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'erro',
      component: ()=> import('../views/Erro.vue')
    }
  ]
})

export default router
