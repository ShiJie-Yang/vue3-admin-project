import router from '@/router'
import NProgress from "nprogress"; 
import "nprogress/nprogress.css"; 
import { userInfoStore } from '@/store/user';
import { ElMessage } from 'element-plus';


NProgress.configure({ showSpinner: false }); 

const whiteList = ['/login','/404','/500']

router.beforeEach((to, from, next) => {
  NProgress.start();
  if(userInfoStore().token){
    if(to.path === '/login'){
      next('/')
      NProgress.done();
    } else {
      if(userInfoStore().userInfo.id !== '' || userInfoStore().userInfo.id !== undefined || userInfoStore().userInfo.id !== null){
        next()
        NProgress.done();
      } else {
        userInfoStore().getUserInfo().then(() => {
          next()
          NProgress.done();
        }).catch(() => {
          ElMessage.error('获取用户信息失败,请重新登录')
          userInfoStore().reset()
          NProgress.done();
        }).finally(() =>  NProgress.done())
      }
    }
  } else {
    if(whiteList.includes(to.path)){
      next()
      NProgress.done();
    } else {
      next('/login')
      NProgress.done();
    }
  }
})