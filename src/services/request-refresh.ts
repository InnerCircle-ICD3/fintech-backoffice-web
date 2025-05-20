import { authApi } from '@/api/auth/api';
import { useAuthStore } from '@/stores/auth';
import { RefreshTokenFailedError } from './api-error';

export const requestRefresh = async (failedRequest: any) => {
  try {
    const authStore = useAuthStore.getState();
    const rememberMe = authStore.rememberMe;
    const refreshToken = authStore.refreshToken;

    if (!refreshToken) {
      authStore.clearTokens();
      return Promise.reject(new RefreshTokenFailedError());
    }

    console.log('Attempting token refresh...');

    const newToken = await authApi.reissue(
      undefined,
      {},
      {
        headers: {
          'Refresh-Token': `${refreshToken}`,
        },
      }
    );
    authStore.setTokens(newToken, rememberMe);

    const requestConfig = failedRequest.response?.config || failedRequest.config;

    if (requestConfig?.headers) {
      requestConfig.headers['Authorization'] = `Bearer ${newToken.accessToken}`;
    }

    return Promise.resolve();
  } catch (error) {
    console.error('Error reissuing token:', error);
    useAuthStore.getState().clearTokens();
    return Promise.reject(new RefreshTokenFailedError());
  }
};
