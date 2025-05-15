import axios, { AxiosError } from 'axios';

const TIME_OUT = 5000; // 5초

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
