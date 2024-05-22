import axios, { type AxiosResponse, type AxiosRequestConfig, type AxiosRequestHeaders } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import pinia from '@/store/index';
import { userInfoStore } from '../store/user';


interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const request = axios.create({
  baseURL: process.env.VEU_APP_BASSE_URL,
  timeout: 50000
});

request.interceptors.request.use((config: ExtendedAxiosRequestConfig) => {

  const userInfo = userInfoStore()
  const token = userInfo.token
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token 
  }
  return config
}
);

request.interceptors.response.use(
  async (response: AxiosResponse<ResponseData<any>>) => {
    const res = response.data; 
 
    if (res.code !== 20000 && res.code !== 200) { 
      ElMessage({
        message: (typeof res.data === 'string' && res.data) || res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (response.status===401) {
        const storeUserInfo = userInfoStore(pinia)
        await storeUserInfo.reset()
        window.location.href = '/' // 去登录页
        ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
          .then(() => {})
          .catch(() => {})
      }
      return Promise.reject(request.interceptors.response);
    } else {
      return res.data;
    }
  },
  (error) => {
    if (error.message.indexOf('timeout') !== -1) {
      ElMessage.error('网络超时');
    } else if (error.message === 'Network Error') {
      ElMessage.error('网络连接错误');
    } else {
      if (error.response.data) ElMessage.error(error.response.statusText);
      else ElMessage.error('接口路径找不到');
    }
    return Promise.reject(error);
  }
);

export default request;
