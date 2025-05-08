import {
  DEFAULT_ERROR_HANDLING_STRATEGY,
  ERROR_HANDLING_STRATEGY_MAP,
  ErrorHandlingStrategy,
  isHandledErrorCode,
} from '@/types/error.type';
import { AxiosError } from 'axios';

// TODO: 추후 메세지 수정
export const ERROR_MESSAGES = {
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

export const getErrorStrategy = (statusCode: number): ErrorHandlingStrategy => {
  if (!isHandledErrorCode(statusCode)) {
    return DEFAULT_ERROR_HANDLING_STRATEGY;
  }

  const strategy = ERROR_HANDLING_STRATEGY_MAP.find(([, codes]) => codes.includes(statusCode))?.[0];

  return strategy || DEFAULT_ERROR_HANDLING_STRATEGY;
};

export const handleError = (error: AxiosError) => {
  const statusCode = error?.response?.status;

  if (!statusCode) {
    if (error.message?.includes('timeout')) {
      error.message = '요청 시간이 초과되었습니다.';
      return error;
    }
    if (error.message?.includes('Network Error')) {
      console.error('Network error:', error);

      error.message = '네트워크 연결을 확인해주세요.';
      return error;
    }

    throw error;
  }

  error.message = getErrorMessage(statusCode);

  const strategy = getErrorStrategy(statusCode);
  console.log(`Error ${statusCode} detected, applying strategy: ${strategy}`);

  switch (strategy) {
    case 'logout':
      localStorage.removeItem('token');
      return error;

    default:
      return error;
  }
};
