interface RetryRequestManagerOptions {
  /** 토큰 갱신 후 클린업 타임아웃 (ms)
   * 지정된 시간 이후에 갱신 상태를 초기화합니다.
   */
  cleanupTimeOut?: number;
}

interface RetryRequestPrams<T> {
  /** 새 토큰을 가져오는 함수 */
  getToken: () => Promise<string>;
  /** 새 토큰으로 원래 요청을 다시 시도하는 함수 */
  onRefetch: (token: string) => Promise<T>;
  /** 에러 처리 함수 */
  onError: (error: unknown) => Promise<T>;
  /** 토큰 갱신 성공 후 실행할 함수 */
  onComplete: () => void;
}

interface RequestQueue {
  /** 요청 성공 시 호출할 함수 */
  resolve: <T>(value: T | PromiseLike<T>) => void;
  /** 요청 실패 시 호출할 함수 */
  reject: (error: unknown) => void;
  /** 토큰을 받았을 때 실행할 함수 */
  onTokenReceived: (token: string) => Promise<unknown>;
}

/**
 * retryRequestManager
 * - 토큰 갱신 및 요청 재시도 로직을 관리하는 함수
 * - 토큰이 만료됐을 때 여러 요청이 동시에 토큰 갱신을 시도하는 폭포수 효과를 방지합니다.
 *
 * 동작 순서
    요청이 들어오면:
    - 이미 토큰 갱신 중이면 → 큐에 추가
    - 토큰 갱신 중이 아니면 → 토큰 갱신 시작

    토큰 갱신이 성공하면:
    - 큐에 있는 모든 요청을 새 토큰으로 처리
    - 현재 요청도 새 토큰으로 처리

    토큰 갱신이 실패하면:
    - 큐에 있는 모든 요청을 같은 에러로 거부
    - 상태 초기화
 *
 * @param options - `RetryRequestManagerOptions`를 통해 클린업 타이머 설정을 제어합니다.
 * @returns 토큰 갱신 및 요청 재시도를 관리하는 함수
 */
export const retryRequestManager = (options?: RetryRequestManagerOptions) => {
  const { cleanupTimeOut = 0 } = options || {};

  // 현재 갱신 중인 토큰 요청 상태를 저장
  let tokenPromise: Promise<string> | null = null;

  // 클린업 타이머를 관리
  let cleanupTimer: NodeJS.Timeout | null = null;

  // 토큰 갱신 대기 중인 요청 큐
  let requestQueue: RequestQueue[] = [];

  // 토큰 갱신 상태 초기화
  const resetState = () => {
    tokenPromise = null;
    if (cleanupTimer) {
      clearTimeout(cleanupTimer);
      cleanupTimer = null;
    }
  };

  // 토큰 갱신 후 대기 중인 모든 요청을 처리
  const processQueue = async (token: string) => {
    const currentQueue = [...requestQueue];
    requestQueue = [];

    const promises = currentQueue.map(({ resolve, reject, onTokenReceived }) => {
      return onTokenReceived(token).then(resolve).catch(reject);
    });

    await Promise.all(promises);
  };

  return async <T>({
    getToken,
    onRefetch,
    onError,
    onComplete,
  }: RetryRequestPrams<T>): Promise<T> => {
    try {
      // 이미 토큰 갱신 중이면 큐에 추가합니다.
      if (tokenPromise) {
        return new Promise((resolve, reject) => {
          requestQueue.push({
            resolve: resolve as <T>(value: T | PromiseLike<T>) => void,
            reject,
            onTokenReceived: onRefetch,
          });
        });
      }

      // 토큰 갱신 시작
      tokenPromise = getToken().catch((error) => {
        requestQueue.forEach(({ reject }) => {
          reject(error);
        });
        requestQueue = [];
        resetState();
        throw error;
      });

      const token = await tokenPromise;

      // 토큰 갱신 성공 시 대기 중인 모든 요청을 처리합니다.
      const [result] = await Promise.all([
        onRefetch(token), //
        processQueue(token),
      ]);

      // 모든 요청 처리 후 콜백을 호출합니다.
      if (onComplete) {
        onComplete();
      }

      return result;
    } catch (error) {
      return await onError(error);
    } finally {
      if (cleanupTimeOut > 0) {
        if (cleanupTimer) clearTimeout(cleanupTimer);
        cleanupTimer = setTimeout(() => {
          resetState();
        }, cleanupTimeOut);
      }
    }
  };
};
