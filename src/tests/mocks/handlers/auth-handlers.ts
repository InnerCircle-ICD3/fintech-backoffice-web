import { LoginRequestType, RegisterRequestType } from '@/api/auth/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const registeredUsers = [
  {
    loginId: fixtures.login.request.loginId,
    loginPw: fixtures.login.request.loginPw,
    userId: fixtures.login.response.userId,
  },
];
let userIdCounter = 1;

const authHandlers = [
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/login`, async ({ request }) => {
    const { loginId, loginPw } = (await request.json()) as LoginRequestType;
    const user = registeredUsers.find((u) => u.loginId === loginId && u.loginPw === loginPw);

    if (user) {
      return HttpResponse.json(
        {
          ...fixtures.login.response,
        },
        { status: 200 }
      );
    }
    return HttpResponse.json(
      { code: 'INVALID_REQUEST', message: '아이디 또는 비밀번호가 일치하지 않습니다.' },
      { status: 400 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/reissue`, async ({ request }) => {
    const refreshToken = request.headers.get('Refresh-Token');

    if (refreshToken && refreshToken === fixtures.login.response.refreshToken) {
      return HttpResponse.json(
        {
          accessToken: fixtures.login.response.accessToken,
          refreshToken: fixtures.login.response.refreshToken,
        },
        { status: 200 }
      );
    }
    return HttpResponse.json(
      { code: 'INVALID_REQUEST', message: '유효하지 않은 리프레시 토큰입니다.' },
      { status: 400 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/register`, async ({ request }) => {
    const body = (await request.json()) as RegisterRequestType;
    const { loginId, loginPw, name } = body;
    // 이미 등록된 아이디인지 확인
    if (registeredUsers.some((u) => u.loginId === loginId)) {
      return HttpResponse.json(
        { code: 'DUPLICATE_ID', message: '이미 존재하는 아이디입니다.' },
        { status: 400 }
      );
    }
    const newUser = { loginId, loginPw, userId: userIdCounter++ };
    registeredUsers.push(newUser);
    return HttpResponse.json(
      {
        merchantId: newUser.userId,
        loginId: newUser.loginId,
        name: name || `가맹점${newUser.userId}`,
        status: 'ACTIVE',
      },
      { status: 200 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/logout`, async ({ request }) => {
    const accessToken = request.headers.get('Authorization');

    if (!accessToken) {
      return HttpResponse.json(
        {
          code: 'INVALID_TOKEN',
          message: '재로그인 필요',
        },
        { status: 401 }
      );
    }

    return HttpResponse.json(
      {
        success: true,
        message: '로그아웃 처리 완료',
      },
      { status: 200 }
    );
  }),
];

export default authHandlers;
