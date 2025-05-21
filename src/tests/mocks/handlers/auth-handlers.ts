import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const authHandlers = [
  http.post(`${import.meta.env.VITE_API_URL}/merchants/login`, async () => {
    return HttpResponse.json(fixtures.loginResponse, { status: 200 });
  }),

  // http.post(`${import.meta.env.VITE_API_URL}/merchants/login`, async () => {
  //   return HttpResponse.json(
  //     {
  //       code: 'INVALID_REQUEST',
  //       message: '비밀번호가 일치하지 않습니다.',
  //     },
  //     { status: 400 }
  //   );
  // }),

  http.post(`${import.meta.env.VITE_API_URL}/merchants/reissue`, async () => {
    return HttpResponse.json(fixtures.loginResponse, { status: 200 });
  }),

  // http.post(`${import.meta.env.VITE_API_URL}/merchants/reissue`, async () => {
  //   return HttpResponse.json(
  //     {
  //       code: 'INVALID_REQUEST',
  //       message: '유효하지 않은 리프레시 토큰입니다.',
  //     },
  //     { status: 401 }
  //   );
  // }),

  http.post(`${import.meta.env.VITE_API_URL}/merchants/register`, async (data) => {
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

  http.post(`${import.meta.env.VITE_API_URL}/merchants/logout`, async (data) => {
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
