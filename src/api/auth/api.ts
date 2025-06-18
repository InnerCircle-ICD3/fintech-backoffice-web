import { merchantApiClient } from '@/services/api/merchant/api-client';
import {
  LoginRequestType,
  LoginResponseSchema,
  LogoutResponseSchema,
  RegisterRequestType,
  RegisterResponseSchema,
  ReissueResponseSchema,
  UpdatePasswordRequestType,
  UpdatePasswordResponseSchema,
} from './schema';

const login = async (payload: LoginRequestType) => {
  return merchantApiClient.post('/merchants/login', {
    data: payload,
    schema: LoginResponseSchema,
  });
};

const register = async (payload: RegisterRequestType) => {
  return merchantApiClient.post('/merchants/register', {
    data: payload,
    schema: RegisterResponseSchema,
  });
};

const reissue = async () => {
  return merchantApiClient.post('/merchants/reissue', {
    schema: ReissueResponseSchema,
  });
};

const logout = async () => {
  return merchantApiClient.post('/merchants/logout', {
    schema: LogoutResponseSchema,
  });
};

const updatePassword = async (payload: UpdatePasswordRequestType) => {
  return merchantApiClient.put('/merchants/update-password', {
    data: payload,
    schema: UpdatePasswordResponseSchema,
  });
};

/**
 * 인증 API 엔드포인트
 */
export const authApi = {
  /** 로그인 */
  login,
  /** 회원가입 */
  register,
  /** 토큰 재발급 */
  reissue,
  /** 로그아웃 */
  logout,
  /** 비밀번호 변경 */
  updatePassword,
};
