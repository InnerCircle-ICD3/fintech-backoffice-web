import axios from 'axios';
import { isRouteErrorResponse } from 'react-router-dom';

// TODO: 추후 메세지 수정
const ERROR_MESSAGES = {
  500: '오류가 발생했습니다.',
  default: '네트워크 연결을 확인해주세요.',
};

export const getErrorMessage = (statusCode?: number, serverMessage?: string): string => {
  if (!statusCode) return ERROR_MESSAGES.default;

  if (ERROR_MESSAGES[statusCode as keyof typeof ERROR_MESSAGES]) {
    return ERROR_MESSAGES[statusCode as keyof typeof ERROR_MESSAGES];
  }

  return serverMessage || ERROR_MESSAGES.default;
};

export const handleErrorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return getErrorMessage(error.status);
  }

  if (axios.isAxiosError(error)) {
    if (error.response) {
      const serverMessage = error.response.data?.message;
      return getErrorMessage(error.response.status, serverMessage);
    }
    // Axios 에러지만 서버 응답이 없는 경우
    return error.message || ERROR_MESSAGES.default;
  }

  if (error instanceof Error) {
    // 일반 JavaScript Error 객체인 경우
    return error.message || ERROR_MESSAGES.default;
  }

  // 위 어떤 조건에도 해당하지 않는 경우
  return ERROR_MESSAGES.default;
};

/**
 * 리프레시 토큰 실패 에러
 */
export class RefreshTokenFailedError extends Error {
  constructor(
    message = '로그인 정보가 만료되었어요. 안전한 서비스 이용을 위해 다시 로그인해주세요. 😊'
  ) {
    super(message);
    this.name = 'RefreshTokenFailedError';

    Object.setPrototypeOf(this, RefreshTokenFailedError.prototype);
  }
}
