import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const merchantsHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/merchants/info`, async () => {
    return HttpResponse.json(fixtures.merchantsInfoResponse, { status: 200 });
  }),
];

export default merchantsHandlers;
