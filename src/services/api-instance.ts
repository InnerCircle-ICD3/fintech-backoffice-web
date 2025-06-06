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

// 가맹점 API 인스턴스
export const merchantApiInstance = createAxiosInstance(import.meta.env.VITE_MERCHANT_API_URL);

// 백오피스 서버 API 인스턴스
export const backofficeApiInstance = createAxiosInstance(import.meta.env.VITE_BACKOFFICE_API_URL);
