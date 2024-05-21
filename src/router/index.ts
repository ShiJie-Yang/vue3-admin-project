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