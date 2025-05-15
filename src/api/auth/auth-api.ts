import { createApiEndpoint } from '@/services';
import {
  LoginRequestSchema,
  LoginRequestType,
  LoginResponseSchema,
  LoginResponseType,
  ReissueResponseSchema,
  ReissueResponseType,
} from './auth-schema';
import { endPoint } from './auth-endpoint';

/**
 * 인증 API 엔드포인트
 */
export const authApi = {
  login: createApiEndpoint<LoginRequestType, LoginResponseType>({
    path: endPoint.login,
    method: 'post',
    requestSchema: LoginRequestSchema,
    responseSchema: LoginResponseSchema,
  }),
  reissue: createApiEndpoint<undefined, ReissueResponseType>({
    path: endPoint.reissue,
    method: 'post',
    responseSchema: ReissueResponseSchema,
  }),
  logout: createApiEndpoint<undefined, ReissueResponseType>({
    path: endPoint.logout,
    method: 'post',
    responseSchema: ReissueResponseSchema,
  }),
};
