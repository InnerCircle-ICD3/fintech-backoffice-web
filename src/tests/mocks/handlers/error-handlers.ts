import { delay, http, HttpResponse } from 'msw';

const errorHandlers = [
  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/400`, async () => {
    await delay(200);
    return HttpResponse.json(
      { message: '잘못된 요청입니다', code: 'INVALID_REQUEST' },
      { status: 400 }
    );
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/401`, async () => {
    await delay(200);
    return HttpResponse.json(
      { message: '인증이 필요합니다', code: 'UNAUTHORIZED' },
      { status: 401 }
    );
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/403`, async () => {
    await delay(200);
    return HttpResponse.json(
      { message: '접근 권한이 없습니다', code: 'FORBIDDEN' },
      { status: 403 }
    );
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/404`, async () => {
    await delay(200);
    return HttpResponse.json(
      { message: '리소스를 찾을 수 없습니다', code: 'NOT_FOUND' },
      { status: 404 }
    );
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/500`, async () => {
    await delay(200);
    return HttpResponse.json(
      { message: '서버 오류가 발생했습니다', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/network`, async () => {
    await delay(200);
    return HttpResponse.error();
  }),

  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/error/timeout`, async () => {
    await delay(10000);
    return HttpResponse.json({ data: '타임아웃 테스트' });
  }),
];

export default errorHandlers;
