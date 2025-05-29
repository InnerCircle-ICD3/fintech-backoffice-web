import { LoginRequestType, LoginResponseType } from '@/api/auth/schema';

const loginResponse: LoginResponseType = {
  accessToken: 'abce1234',
  refreshToken: 'dfghj23456',
};

const loginRequest: LoginRequestType = {
  loginId: 'test1234',
  loginPw: 'test1234!!',
};

export const login = {
  response: loginResponse,
  request: loginRequest,
};
