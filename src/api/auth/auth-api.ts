import { createApiEndpoint } from '@/services/api-factory';
import { axiosInstanceWithoutAccessToken } from '@/services/api-instance';
import {
  LoginRequestSchema,
  LoginRequestType,
  LoginResponseSchema,
  LoginResponseType,
  LogoutResponseType,
  LogoutResponseSchema,
  ReissueResponseSchema,
  ReissueResponseType,
  RegisterRequestSchema,
  RegisterRequestType,
  RegisterResponseType,
  RegisterResponseSchema,
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
    axiosInstance: axiosInstanceWithoutAccessToken,
  }),
  register: createApiEndpoint<RegisterRequestType, RegisterResponseType>({
    path: '/merchants/register',
    method: 'post',
    requestSchema: RegisterRequestSchema,
    responseSchema: RegisterResponseSchema,
  }),
  reissue: createApiEndpoint<undefined, ReissueResponseType>({
    path: '/merchants/reissue',
    method: 'post',
    responseSchema: ReissueResponseSchema,
    axiosInstance: axiosInstanceWithoutAccessToken,
  }),
  logout: createApiEndpoint<undefined, LogoutResponseType>({
    path: '/merchants/logout',
    method: 'post',
    responseSchema: LogoutResponseSchema,
  }),
};
