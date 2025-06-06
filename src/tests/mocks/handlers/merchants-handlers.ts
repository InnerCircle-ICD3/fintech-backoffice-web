import { MerchantModifyRequestSchema } from '@/api/merchants/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const merchantsHandlers = [
  http.get(`${import.meta.env.VITE_MAIN_API_URL}/merchants/info`, async ({ request }) => {
    const token = request.headers.get('Authorization');

    if (!token) {
      return HttpResponse.json({ success: false, message: '재로그인 필요' }, { status: 401 });
    }

    return HttpResponse.json(fixtures.merchantsInfo.infoResponse, { status: 200 });
  }),
  http.put(`${import.meta.env.VITE_MAIN_API_URL}/merchants/modify`, async ({ request }) => {
    const body = await request.json();

    const { success, data } = MerchantModifyRequestSchema.safeParse(body);

    if (!success) {
      return HttpResponse.json({ success: false, message: '잘못된 요청입니다.' }, { status: 400 });
    }

    return HttpResponse.json(data, { status: 200 });
  }),
  http.delete(`${import.meta.env.VITE_MAIN_API_URL}/merchants/delete`, async ({ request }) => {
    const token = request.headers.get('Authorization');

    if (!token) {
      return HttpResponse.json({ success: false, message: '재로그인 필요' }, { status: 401 });
    }

    return HttpResponse.json(fixtures.merchantsInfo.deleteResponse, { status: 200 });
  }),
];

export default merchantsHandlers;
