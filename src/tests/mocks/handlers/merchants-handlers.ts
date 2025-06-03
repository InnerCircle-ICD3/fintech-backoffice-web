import fixtures from '@/tests/mocks/fixtures';
import { http, HttpResponse } from 'msw';

const merchantsHandlers = [
  http.get(`${import.meta.env.VITE_MAIN_API_URL}/merchants/info`, async () => {
    return HttpResponse.json(fixtures.merchantsInfo.infoResponse, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MAIN_API_URL}/merchants/api-keys`, async () => {
    return HttpResponse.json(fixtures.merchantsApiKeys.apiKeysResponse, { status: 200 });
  }),
];

export default merchantsHandlers;
