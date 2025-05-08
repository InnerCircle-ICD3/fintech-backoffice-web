import axios, { AxiosError } from 'axios';
import { handleError } from './error.service';

const TIME_OUT = 5000; // 5초

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(handleError(error))
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(handleError(error));
  }
);

export default api;
