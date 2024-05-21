import router from '@/router'
// import { getToken } from '@/utils/token';
import NProgress from "nprogress"; 
import "nprogress/nprogress.css"; 
import { userInfoStore } from '@/store/user';


NProgress.configure({ showSpinner: false }); 

const whiteList = ['/login','/404','/500']

router.beforeEach((to, from, next) => {
  NProgress.start();
  if(userInfoStore().token){
    if(to.path === '/login'){
      next('/')
      NProgress.done();
    } else {
      next()
      NProgress.done();
    }
  } else {
    if(whiteList.includes(to.path)){
      next()
    } else {
      next('/login')
      NProgress.done();
    }
  }
})