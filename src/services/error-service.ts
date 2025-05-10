import axios, { AxiosError } from 'axios';
import { isRouteErrorResponse } from 'react-router-dom';

// TODO: 추후 메세지 수정
const ERROR_MESSAGES = {
  400: '잘못된 요청입니다.',
  401: '로그인 후 사용해주세요.',
  403: '권한이 없습니다.',
  404: '페이지를 찾을 수 없습니다.',
  500: '오류가 발생했습니다.',
  502: '오류가 발생했습니다.',
  default: '알 수 없는 오류가 발생했습니다.',
};

export const getErrorMessage = (statusCode?: number): string => {
  if (!statusCode) return ERROR_MESSAGES.default;
  return ERROR_MESSAGES[statusCode as keyof typeof ERROR_MESSAGES] || ERROR_MESSAGES.default;
};

export const handleError = (error: AxiosError) => {
  const statusCode = (error as AxiosError)?.response?.status;

  if (!statusCode) {
    error.message = '네트워크 연결을 확인해주세요.';
    return error;
  }

  error.message = getErrorMessage(statusCode);
  return error;
};

export const determineErrorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return getErrorMessage(error.status);
  }

  if (axios.isAxiosError(error)) {
    if (error.response) {
      return getErrorMessage(error.response.status);
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
