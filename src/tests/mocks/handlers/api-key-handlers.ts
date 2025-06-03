import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const apiKeyHandlers = [
  http.post(`${import.meta.env.VITE_MAIN_API_URL}/merchants/api-keys`, async () => {
    return HttpResponse.json(fixtures.merchantsApiKeys.apiKeysResponse, { status: 200 });
  }),
];

export default apiKeyHandlers;
