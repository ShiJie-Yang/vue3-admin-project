import request from '@/utils/request';
// import { mockLogin } from '@/mock/login';

// info    GET   /admin/acl/index/info
// login   POST  /admin/acl/index/login
// logout  POST  /admin/acl/index/logout

export interface LoginModel {
  userName: string,
  passWord: string
}

export interface TokenModel {
  token: string
}

export interface UserInfoModel {
  name: string
  avatar: string
  buttons: string[]
  roles: string[]
  routes: string[]
}

export default {
  // 登录 - 获取token
  reqLogin(data: LoginModel) {
    return request.post<any, TokenModel>(`/api/login`, data)
    // return mockLogin(data)
  },
  // 获取个人信息
  reqInfo() {
    return request.get<any, UserInfoModel>(`/api/userInfo`)
  },
  // 退出登录
  reqLogout() {
    return request.post<any, null>(``)
  }
}