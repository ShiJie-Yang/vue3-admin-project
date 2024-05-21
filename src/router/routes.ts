import type { RouteRecordRaw } from 'vue-router';


/**
 * @staticRoutes = 静态路由
 * @asyncRoutes = 动态路由
 * @anyRoute = 任意路由
 * */ 


export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      hidden: true
    }
  }
];

export const allAsyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { 
          title: '首页', 
          icon: 'ele-HomeFilled' 
        }
      }
    ]
  }
]

export const anyRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)', 
  name: 'Any',
  redirect: '/404',
  meta: {
    hidden: true 
  }
}