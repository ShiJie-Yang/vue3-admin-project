import request from '@/utils/request';


// info    GET   /admin/acl/index/info
// login   POST  /admin/acl/index/login
// logout  POST  /admin/acl/index/logout

export interface LoginModel {
  userName: string,
  password: string
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
    return request.post<any, TokenModel>(``, data)
  },
  // 获取个人信息
  reqInfo() {
    return request.get<any, UserInfoModel>(``)
  },
  // 退出登录
  reqLogout() {
    return request.post<any, null>(``)
  }
}