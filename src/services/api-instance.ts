import { endPoint } from '@/api/auth/auth-endpoint';
import { useAuthStore } from '@/stores/auth-store';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const TIME_OUT = 5000; // 5초

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
});

/** 인터셉터 ID 변수 */
let requestInterceptorId: number;
let responseInterceptorId: number;

/** 인터셉터 초기화 함수
 * @description 토큰이 변경될 때 기존 인터셉터를 제거하고 새 인터셉터를 설정하기 위해 사용됩니다.
 */
const initializeInterceptors = () => {
  if (requestInterceptorId !== undefined) {
    axiosInstance.interceptors.request.eject(requestInterceptorId);
  }
  if (responseInterceptorId !== undefined) {
    axiosInstance.interceptors.response.eject(responseInterceptorId);
  }
};

/** 인터셉터 설정 함수*/
const setupInterceptors = (token: string | null) => {
  requestInterceptorId = axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const isTokenReissueRequest = config.url?.includes(endPoint.reissue);

      const tokenToUse = isTokenReissueRequest //
        ? useAuthStore.getState().refreshToken
        : token;

      if (tokenToUse) {
        config.headers.Authorization = `Bearer ${tokenToUse}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  responseInterceptorId = axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
};

/** 초기 인터셉터 설정
 * @description 파일이 처음 로드될 때 현재 토큰으로 인터셉터를 설정합니다.
 */
setupInterceptors(useAuthStore.getState().accessToken);

/** 토큰 변경 구독
 * @description 토큰이 변경될 때마다 인터셉터를 초기화하고 새로 설정합니다.
 */
useAuthStore.subscribe(
  (state) => state.accessToken,
  (token) => {
    initializeInterceptors();
    setupInterceptors(token);
  }
);
