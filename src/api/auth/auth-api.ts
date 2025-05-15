import { createApiEndpoint } from '@/services';
import {
  LoginRequestSchema,
  LoginRequestType,
  LoginResponseSchema,
  LoginResponseType,
  ReissueResponseSchema,
  ReissueResponseType,
} from './auth-schema';

/**
 * 인증 API 엔드포인트
 */
export const authApi = {
  login: createApiEndpoint<LoginRequestType, LoginResponseType>({
    path: '/merchants/login',
    method: 'post',
    requestSchema: LoginRequestSchema,
    responseSchema: LoginResponseSchema,
  }),
  reissue: createApiEndpoint<undefined, ReissueResponseType>({
    path: '/merchants/reissue',
    method: 'post',
    responseSchema: ReissueResponseSchema,
  }),
  logout: createApiEndpoint<undefined, ReissueResponseType>({
    path: '/merchants/logout',
    method: 'post',
    responseSchema: ReissueResponseSchema,
  }),
};
