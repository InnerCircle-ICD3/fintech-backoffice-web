import axios from 'axios';
import { isRouteErrorResponse } from 'react-router-dom';

// TODO: 추후 메세지 수정
const CLIENT_ERROR_MESSAGES = {
  404: '페이지를 찾을 수 없습니다.',
  500: '오류가 발생했습니다.',
  default: '네트워크 연결을 확인해주세요.',
};

export const getErrorMessage = (statusCode?: number, serverMessage?: string): string => {
  if (!statusCode) return CLIENT_ERROR_MESSAGES.default;

  if (CLIENT_ERROR_MESSAGES[statusCode as keyof typeof CLIENT_ERROR_MESSAGES]) {
    return CLIENT_ERROR_MESSAGES[statusCode as keyof typeof CLIENT_ERROR_MESSAGES];
  }

  return serverMessage || CLIENT_ERROR_MESSAGES.default;
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
    return error.message || CLIENT_ERROR_MESSAGES.default;
  }

  if (error instanceof Error) {
    // 일반 JavaScript Error 객체인 경우
    return error.message || CLIENT_ERROR_MESSAGES.default;
  }

  // 위 어떤 조건에도 해당하지 않는 경우
  return CLIENT_ERROR_MESSAGES.default;
};
