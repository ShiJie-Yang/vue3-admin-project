import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import { staticRoutes, allAsyncRoutes, anyRoute } from '@/router/routes'
import router from '@/router';
import type { UserInfoState } from './interface/userInfo'
import { getToken, removeToken, setToken } from '@/utils/token';
import userinfoApi, { LoginModel } from '@/api/user';
import { ElMessage, MessageParamsWithType } from 'element-plus'
import { cloneDeep } from 'lodash';


// filter router
const filterRouter = (asyncRoutes: Array<RouteRecordRaw>, routeNames: string[]) => {
  const filterRoutesList = asyncRoutes.filter(item => {
    if(routeNames.includes(item.name as string)){
      if(item.children && item.children.length > 0){
        item.children = filterRouter(item.children, routeNames)
      }
      return true
    }
  })
  return filterRoutesList
};

// add router
const addRouters = (asyncRoutes: RouteRecordRaw[]) => {
  asyncRoutes.forEach(item => router.addRoute(item))
}

// remove router 清除路由重新注册
const removeRouters = () => {
  router.getRoutes().forEach(item => {
    router.removeRoute(item.name as string)
  })
  addRouters(staticRoutes)
}

const initUserInfo = () => ({
  name: '',
  avatar: '',
  buttons: [],
  roles: [],
  routes: []
})

export const userInfoStore = defineStore('userInfo', {
  state: () :UserInfoState => ({
    token: getToken() as string,
    userInfo: initUserInfo(),
    menuRoutes: []
  }),
  actions: {
    async login (data: LoginModel) {
      try {
        const res = await userinfoApi.reqLogin(data)
        this.token = res.token
        setToken(this.token)
      } catch (error) {
        ElMessage.error(error as MessageParamsWithType)
      }
    },
    async getUserInfo () {
      try {
        this.userInfo = await userinfoApi.reqInfo()
        const asyncRoutes = filterRouter(cloneDeep(allAsyncRoutes), this.userInfo.routes)
        this.menuRoutes = staticRoutes.concat(asyncRoutes, anyRoute)
        addRouters(this.menuRoutes)
      } catch (error) {
        ElMessage.error(error as MessageParamsWithType)
        return Promise.reject(error)
      }
    },
    async reset() {
      try {
        await userinfoApi.reqLogout()
      } catch (error) {
        removeToken()
        this.token = ""
        this.userInfo = initUserInfo()
        removeRouters()
      }
    }
  }
})
