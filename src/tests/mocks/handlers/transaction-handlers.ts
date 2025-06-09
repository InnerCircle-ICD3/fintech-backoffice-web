import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const transactionHandlers = [
  http.get(`${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/payment-histories`, async () => {
    return HttpResponse.json(fixtures.transactionAll.response, { status: 200 });
  }),
  http.get(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/payment-histories/:transactionId`,
    async () => {
      return HttpResponse.json(fixtures.transactionDetail.response, { status: 200 });
    }
  ),
];

export default transactionHandlers;
