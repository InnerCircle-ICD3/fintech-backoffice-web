import { StatusCodes } from 'http-status-codes';
import { requestRefresh } from './request-refresh';
import { useAuthStore } from '@/stores/auth';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

/**
 * 인터셉터 설정 함수
 * */
export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = useAuthStore.getState().accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  /** 리프레시 토큰 인터셉터 */
  createAuthRefreshInterceptor(axiosInstance, requestRefresh, {
    statusCodes: [StatusCodes.UNAUTHORIZED],
    pauseInstanceWhileRefreshing: true,
    interceptNetworkError: true,
  });
};
