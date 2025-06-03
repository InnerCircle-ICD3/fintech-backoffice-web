import { useAuthStore } from '@/stores/auth';
import axios, { InternalAxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { StatusCodes } from 'http-status-codes';
import { requestRefresh } from './request-refresh';

export const TIME_OUT = 5000; // 5초

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: TIME_OUT,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = useAuthStore.getState().accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  createAuthRefreshInterceptor(instance, requestRefresh, {
    statusCodes: [StatusCodes.UNAUTHORIZED],
    pauseInstanceWhileRefreshing: true,
    interceptNetworkError: true,
  });

  return instance;
};

// 백오피스 API 인스턴스
export const mainApiInstance = createAxiosInstance(import.meta.env.VITE_MAIN_API_URL);

// 결제 서버 API 인스턴스
export const paymentApiInstance = createAxiosInstance(import.meta.env.VITE_PAYMENT_API_URL);
