import { useAuthStore } from '@/stores/auth';
import axios, { InternalAxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { StatusCodes } from 'http-status-codes';
import { requestRefresh } from './request-refresh';

export const TIME_OUT = 5000; // 5초

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_MERCHANT_API_URL,
  timeout: TIME_OUT,
});

apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

/** 토큰 재발급 */
createAuthRefreshInterceptor(apiInstance, requestRefresh, {
  statusCodes: [StatusCodes.UNAUTHORIZED],
  pauseInstanceWhileRefreshing: true,
  interceptNetworkError: true,
});
