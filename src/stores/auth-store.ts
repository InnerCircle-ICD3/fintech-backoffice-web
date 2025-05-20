import { produce } from 'immer';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
  StateStorage,
  subscribeWithSelector,
} from 'zustand/middleware';

const STORAGE_KEY = 'auth-store';

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  isHydrated: boolean /** 타이밍 이슈 해결을 위한 hydrated 상태 */;
  accessToken: string | null;
  refreshToken: string | null;
  rememberMe: boolean;
  setTokens: ({ accessToken, refreshToken }: TokenType, rememberMe: boolean) => void;
  setIsHydrated: () => void;
  clearTokens: () => void;
}

const getCustomPersistentStorage = (): StateStorage => {
  return {
    getItem: (name: string): string | Promise<string | null> | null => {
      const localData = localStorage.getItem(name);
      if (localData) {
        return localData;
      }

      const sessionData = sessionStorage.getItem(name);
      if (sessionData) {
        return sessionData;
      }
      return null;
    },
    setItem: (name: string, value: string): void | Promise<void> => {
      try {
        const { state: persistedState } = JSON.parse(value) as {
          state: Pick<AuthState, 'rememberMe'>;
        };

        if (persistedState.rememberMe) {
          localStorage.setItem(name, value);
          sessionStorage.removeItem(name);
        } else {
          sessionStorage.setItem(name, value);
          localStorage.removeItem(name);
        }
      } catch (e) {
        console.error('customStorage setItem 오류:', e);
        localStorage.setItem(name, value);
      }
    },
    removeItem: (name: string): void | Promise<void> => {
      localStorage.removeItem(name);
      sessionStorage.removeItem(name);
    },
  };
};

export const useAuthStore = create<AuthState>()(
  devtools(
    subscribeWithSelector(
      persist(
        (set) => ({
          isHydrated: false,
          accessToken: null,
          refreshToken: null,
          rememberMe: true,
          setTokens: ({ accessToken, refreshToken }: TokenType, rememberMe: boolean) =>
            set(
              produce((state) => {
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
                state.rememberMe = rememberMe;
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
          storage: createJSONStorage(getCustomPersistentStorage),
          partialize: (state) => ({
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            isHydrated: state.isHydrated,
            rememberMe: state.rememberMe,
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
