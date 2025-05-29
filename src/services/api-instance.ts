import { useAuthStore } from '@/stores/auth';
import axios, { InternalAxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { StatusCodes } from 'http-status-codes';
import { requestRefresh } from './request-refresh';

export const TIME_OUT = 5000; // 5초

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
});

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

// 리프레시 토큰 인터셉터 설정
createAuthRefreshInterceptor(axiosInstance, requestRefresh, {
  statusCodes: [StatusCodes.UNAUTHORIZED],
  pauseInstanceWhileRefreshing: true,
  interceptNetworkError: true,
});
