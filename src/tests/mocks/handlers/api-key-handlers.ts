import { ApiKeysResponseListType } from '@/api/api-keys/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

let apiKeysStore: ApiKeysResponseListType = [...fixtures.merchantsApiKeys.get];

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

      return HttpResponse.json(apiKeysStore, { status: 200 });
    }
  ),
  http.post(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:merchantId`,
    async ({ params }) => {
      const { merchantId } = params;

      if (!merchantId) {
        return HttpResponse.json(
          { success: false, message: 'Merchant ID is required' },
          { status: 400 }
        );
      }

      apiKeysStore.push(fixtures.merchantsApiKeys.post);

      return HttpResponse.json(fixtures.merchantsApiKeys.post, { status: 200 });
    }
  ),
  http.post(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:merchantId/reissue`,
    async ({ params }) => {
      const { merchantId } = params;

      if (!merchantId) {
        return HttpResponse.json(
          { success: false, message: 'Merchant ID is required' },
          { status: 400 }
        );
      }

      const existingKeyIndex = apiKeysStore.findIndex((key) => key.active);
      if (existingKeyIndex !== -1) {
        apiKeysStore[existingKeyIndex] = fixtures.merchantsApiKeys.reissue;
      }

      return HttpResponse.json(fixtures.merchantsApiKeys.reissue, { status: 200 });
    }
  ),
  http.delete(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:key`,
    async ({ params }) => {
      const { key } = params;

      if (!key) {
        return HttpResponse.json({ success: false, message: 'Key is required' }, { status: 400 });
      }

      apiKeysStore = apiKeysStore.filter((apiKey) => apiKey.key !== key);

      return HttpResponse.json({ status: 200 });
    }
  ),
];

export default apiKeyHandlers;
