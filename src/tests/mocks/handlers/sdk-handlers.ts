import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const sdkHandlers = [
  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key`, async () => {
    return HttpResponse.json(fixtures.sdkKey.get, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key/activate`, async () => {
    return HttpResponse.json(fixtures.sdkKey.activate, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key/deactivate`, async () => {
    return HttpResponse.json(fixtures.sdkKey.deactivate, { status: 200 });
  }),
];

export default sdkHandlers;
