// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/home/index.vue'
// import Login from '@/views/login/index.vue'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     redirect: { path: '/login' }
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
  scrollBehavior() {
    return { top: 0, left: 0}
  }
})

export default router;