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

interface UserType {
  userId: number;
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  userId: number | null;
  accessToken: string | null;
  refreshToken: string | null;
  rememberMe: boolean;
  setUser: (user: UserType, rememberMe: boolean) => void;
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
          userId: null,
          accessToken: null,
          refreshToken: null,
          rememberMe: true,
          setUser: (user: UserType, rememberMe: boolean) =>
            set(
              produce((state) => {
                state.userId = user.userId;
                state.accessToken = user.accessToken;
                state.refreshToken = user.refreshToken;
                state.rememberMe = rememberMe;
              }),
              false,
              'auth/setUser'
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
        }),
        {
          name: STORAGE_KEY,
          storage: createJSONStorage(getCustomPersistentStorage),
          partialize: (state) => ({
            userId: state.userId,
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            rememberMe: state.rememberMe,
          }),
        }
      )
    )
  )
);

export const useUserId = () => useAuthStore((state) => state.userId);
export const useAccessToken = () => useAuthStore((state) => state.accessToken);
export const useRefreshToken = () => useAuthStore((state) => state.refreshToken);
export const useSetUser = () => useAuthStore((state) => state.setUser);
export const useClearTokens = () => useAuthStore((state) => state.clearTokens);
