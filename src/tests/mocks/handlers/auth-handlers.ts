import { LoginRequestType } from '@/api/auth/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const authHandlers = [
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/login`, async ({ request }) => {
    const { loginId, loginPw } = (await request.json()) as LoginRequestType;
    if (loginId === fixtures.login.request.loginId && loginPw === fixtures.login.request.loginPw) {
      return HttpResponse.json(fixtures.login.response, { status: 200 });
    }
    return HttpResponse.json(
      { code: 'INVALID_REQUEST', message: '아이디 또는 비밀번호가 일치하지 않습니다.' },
      { status: 400 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/reissue`, async ({ request }) => {
    const refreshToken = request.headers.get('Refresh-Token');
    if (refreshToken && refreshToken === fixtures.login.response.refreshToken) {
      return HttpResponse.json(fixtures.reissue.response, { status: 200 });
    }
    return HttpResponse.json(
      { code: 'INVALID_REQUEST', message: '유효하지 않은 리프레시 토큰입니다.' },
      { status: 400 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/register`, async (data) => {
    console.log('register data', data);
    return HttpResponse.json(
      {
        merchantId: 4,
        loginId: 'merchant1234',
        name: '홍길동 가맹점1',
        status: 'ACTIVE',
      },
      { status: 200 }
    );
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/logout`, async (data) => {
    console.log('logout data', data);
    return HttpResponse.json(
      {
        message: '로그아웃 처리 완료',
      },
      { status: 200 }
    );
  }),
];

export default authHandlers;
