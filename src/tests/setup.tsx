import server from '@/tests/mocks/server';
import '@testing-library/jest-dom';
import '@vanilla-extract/css/disableRuntimeStyles';

// ResizeObserver Mock 설정
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;

// React 18 useEffect 경고 방지
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  // 경고 메시지 필터링
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    if (/Warning.*React Router/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (/Warning.*React Router/.test(args[0])) {
      return;
    }
    originalWarn.call(console, ...args);
  };

  // MSW 서버 시작
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  // 원래 console 메서드 복구
  console.error = originalError;
  console.warn = originalWarn;
  // MSW 서버 종료
  server.close();
});

// 각 테스트 후 MSW 핸들러 초기화
afterEach(() => {
  server.resetHandlers();
});
