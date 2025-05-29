import fixtures from '@/tests/mocks/fixtures';
import { http, HttpResponse } from 'msw';

const merchantsHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/merchants/info`, async () => {
    return HttpResponse.json(fixtures.merchantsInfo.infoResponse, { status: 200 });
  }),
];

export default merchantsHandlers;
