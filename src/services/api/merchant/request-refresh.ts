import { RefreshTokenFailedError } from '@/services/error/api-error';
import { useAuthStore } from '@/stores/auth';
import type { AxiosError } from 'axios';
import { apiInstance } from './api-instance';

export const requestRefresh = async (failedRequest: AxiosError) => {
  try {
    const authStore = useAuthStore.getState();
    const rememberMe = authStore.rememberMe;
    const refreshToken = authStore.refreshToken;

    if (!refreshToken) {
      authStore.clearTokens();
      return Promise.reject(new RefreshTokenFailedError());
    }

    console.log('Attempting token refresh...');

    const { data: newTokens } = await apiInstance({
      url: '/auth/reissue',
      method: 'POST',
      headers: {
        'Refresh-Token': refreshToken,
      },
    });

    authStore.setUser(newTokens, rememberMe);

    const requestConfig = failedRequest.response?.config || failedRequest.config;

    if (requestConfig?.headers) {
      requestConfig.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
    }

    return Promise.resolve();
  } catch (error) {
    console.error('Error reissuing token:', error);
    useAuthStore.getState().clearTokens();
    return Promise.reject(new RefreshTokenFailedError());
  }
};
