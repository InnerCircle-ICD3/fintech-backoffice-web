import axios from 'axios';

export const TIME_OUT = 5000; // 5초

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKOFFICE_API_URL,
  timeout: TIME_OUT,
});

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
