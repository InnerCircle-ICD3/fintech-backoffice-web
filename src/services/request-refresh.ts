import { authApi } from '@/api/auth/auth-api';
import { useAuthStore } from '@/stores/auth-store';
import { RefreshTokenFailedError } from './api-error';

export const requestRefresh = async (failedRequest: any) => {
  try {
    const authStore = useAuthStore.getState();
    console.log('Auth Store State:', {
      accessToken: !!authStore.accessToken,
      refreshToken: !!authStore.refreshToken,
      isHydrated: authStore.isHydrated,
    });

    const refreshToken = authStore.refreshToken;
    if (!refreshToken) {
      console.log('No refresh token available');
      authStore.clearTokens();
      return Promise.reject(new RefreshTokenFailedError());
    }

    console.log('Attempting token refresh...');

    const newToken = await authApi.reissue(
      undefined,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    authStore.setTokens(newToken);

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
