import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const apiKeyHandlers = [
  http.get(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:merchantId`,
    async ({ params }) => {
      const { merchantId } = params;
      if (!merchantId) {
        return HttpResponse.json(
          { success: false, message: 'Merchant ID is required' },
          { status: 400 }
        );
      }

      return HttpResponse.json(fixtures.merchantsApiKeys.get, { status: 200 });
    }
  ),
  http.post(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:merchantId`,
    async ({ params }) => {
      const { merchantId } = params;
      return HttpResponse.json(fixtures.merchantsApiKeys.post, { status: 200 });
    }
  ),
  http.post(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:merchantId/reissue`,
    async ({ params }) => {
      const { merchantId } = params;
      return HttpResponse.json(fixtures.merchantsApiKeys.reissue, { status: 200 });
    }
  ),
  http.delete(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:key`,
    async ({ params }) => {
      const { key } = params;
      return HttpResponse.json({ status: 200 });
    }
  ),
];

export default apiKeyHandlers;
