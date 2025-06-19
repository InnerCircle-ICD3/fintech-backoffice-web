import { useAuthStore } from '@/stores/auth';
import fixtures from '@/tests/mocks/fixtures';
import { act, renderHook } from '@testing-library/react';

describe('Auth Store', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.clearTokens();
    });
  });

  test('자동 로그인 체크 후 토큰 저장하면 토큰이 로컬스토리지에 저장되고, rememberMe가 true로 저장된다', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser(
        {
          userId: fixtures.login.response.userId,
          accessToken: fixtures.login.response.accessToken,
          refreshToken: fixtures.login.response.refreshToken,
        },
        true
      );
    });

    const stored = JSON.parse(localStorage.getItem('auth-store') || '{}');
    expect(stored.state.rememberMe).toBe(true);
  });

  test('자동 로그인 해제 후 토큰 저장하면 토큰이 세션스토리지에 저장되고, rememberMe가 false로 저장된다', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.setUser(
        {
          userId: fixtures.login.response.userId,
          accessToken: fixtures.login.response.accessToken,
          refreshToken: fixtures.login.response.refreshToken,
        },
        false
      );
    });

    const stored = JSON.parse(sessionStorage.getItem('auth-store') || '{}');
    expect(stored.state.rememberMe).toBe(false);
  });

  test('로그아웃하면 모든 스토리지에서 토큰이 제거된다', () => {
    const { result } = renderHook(() => useAuthStore());
    const users = {
      userId: fixtures.login.response.userId,
      accessToken: fixtures.login.response.accessToken,
      refreshToken: fixtures.login.response.refreshToken,
    };

    act(() => {
      result.current.setUser(users, true);
    });

    act(() => {
      result.current.clearTokens();
    });

    const localStored = JSON.parse(localStorage.getItem('auth-store') || '{}');
    expect(localStored.state?.accessToken).toBeNull();
    expect(localStored.state?.refreshToken).toBeNull();
  });
});
