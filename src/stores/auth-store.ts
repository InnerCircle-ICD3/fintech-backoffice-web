import { produce } from 'immer';
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const STORAGE_KEY = 'auth-store';

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  isHydrated: boolean /** 타이밍 이슈 해결을 위한 hydrated 상태 */;
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: ({ accessToken, refreshToken }: TokenType) => void;
  setIsHydrated: () => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    subscribeWithSelector(
      persist(
        (set) => ({
          isHydrated: false,
          accessToken: null,
          refreshToken: null,
          setTokens: ({ accessToken, refreshToken }: TokenType) =>
            set(
              produce((state) => {
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
              }),
              false,
              'auth/setTokens'
            ),
          clearTokens: () => {
            set(
              produce((state) => {
                state.accessToken = null;
                state.refreshToken = null;
              }),
              false,
              'auth/clearTokens'
            );
          },
          setIsHydrated: () =>
            set(
              produce((state) => {
                state.isHydrated = true;
              }),
              false,
              'auth/setIsHydrated'
            ),
        }),
        {
          name: STORAGE_KEY,
          partialize: (state) => ({
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            isHydrated: state.isHydrated,
          }),
          onRehydrateStorage: () => (state) => {
            if (state) {
              state.setIsHydrated();
            }
          },
        }
      )
    )
  )
);

export const useAccessToken = () => useAuthStore((state) => state.accessToken);
export const useRefreshToken = () => useAuthStore((state) => state.refreshToken);
export const useSetTokens = () => useAuthStore((state) => state.setTokens);
export const useClearTokens = () => useAuthStore((state) => state.clearTokens);
export const useIsHydrated = () => useAuthStore((state) => state.isHydrated);
