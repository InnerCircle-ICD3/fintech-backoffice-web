import axios from 'axios';
import { setupInterceptors } from './axios-interceptors';

export const TIME_OUT = 5000; // 5초

const baseConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
};

export const axiosInstance = axios.create(baseConfig);

export const axiosInstanceWithoutAccessToken = axios.create(baseConfig);

setupInterceptors(axiosInstance);

axiosInstanceWithoutAccessToken.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
