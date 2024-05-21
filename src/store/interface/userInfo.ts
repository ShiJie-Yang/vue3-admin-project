import type { RouteRecordRaw } from "vue-router";
import type { UserInfoModel } from '@/api/user'
export interface UserInfoState {
  token: string;
  userInfo: UserInfoModel,
  menuRoutes: RouteRecordRaw[] 
}