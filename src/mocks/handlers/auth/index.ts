import { http, HttpResponse } from 'msw';
import login from '@/mocks/fixtures/auth/login';

const authHandlers = [
  http.post(`${import.meta.env.VITE_API_URL}/merchants/login`, async () => {
    return HttpResponse.json(
      {
        data: login,
      },
      { status: 200 }
    );
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
  // http.post(`${import.meta.env.VITE_API_URL}/merchants/login`, async () => {
  //   return HttpResponse.json(
  //     {
  //       code: 'INVALID_REQUEST',
  //       message: '존재하지 않는 ID입니다.',
  //     },
  //     { status: 400 }
  //   );
  // }),
];

export default authHandlers;
