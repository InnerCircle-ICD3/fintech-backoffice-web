import { MerchantModifySchema } from '@/api/merchants/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

let merchantInfoStore = { ...fixtures.merchantsInfo.infoResponse };

const merchantsHandlers = [
  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/info`, async () => {
    return HttpResponse.json(merchantInfoStore, { status: 200 });
  }),
  http.put(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/modify`, async ({ request }) => {
    const token = request.headers.get('Authorization');
    const body = await request.json();

    if (!token) {
      return HttpResponse.json({ success: false, message: '재로그인 필요' }, { status: 401 });
    }

    const { success, data } = MerchantModifySchema.safeParse(body);

    if (!success) {
      return HttpResponse.json({ success: false, message: '잘못된 요청입니다.' }, { status: 400 });
    }

    // 가맹점 정보 업데이트
    merchantInfoStore = {
      ...merchantInfoStore,
      ...data,
    };

    return HttpResponse.json(merchantInfoStore, { status: 200 });
  }),
  http.delete(`${import.meta.env.VITE_MERCHANT_API_URL}/merchants/delete`, async ({ request }) => {
    const token = request.headers.get('Authorization');

    if (!token) {
      return HttpResponse.json({ success: false, message: '재로그인 필요' }, { status: 401 });
    }

    return HttpResponse.json(fixtures.merchantsInfo.deleteResponse, { status: 200 });
  }),
];

export default merchantsHandlers;
