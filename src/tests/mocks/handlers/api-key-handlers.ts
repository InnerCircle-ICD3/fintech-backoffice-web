import { ApiKeyResponseType, ApiKeysResponseListType } from '@/api/api-keys/schema';
import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

let apiKeysStore: ApiKeysResponseListType = [...fixtures.merchantsApiKeys.get];

// 랜덤 문자열 생성 함수
function randomString(length: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 새 API Key 객체 생성 함수
function createApiKey(): ApiKeyResponseType {
  const now = new Date();
  return {
    id: Date.now() + Math.floor(Math.random() * 10000),
    key: `key_${randomString(8)}`,
    secret: `secret_${randomString(12)}`,
    active: true,
    createdAt: now.toISOString(),
    expiredAt: new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  };
}

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
      const newKey = createApiKey();
      apiKeysStore.push(newKey);
      return HttpResponse.json(newKey, { status: 200 });
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
        // 기존 active 키를 랜덤 값으로 갱신
        apiKeysStore[existingKeyIndex] = {
          ...apiKeysStore[existingKeyIndex],
          key: `key_${randomString(8)}`,
          secret: `secret_${randomString(12)}`,
        };
        return HttpResponse.json(apiKeysStore[existingKeyIndex], { status: 200 });
      }
      return HttpResponse.json({ success: false, message: 'No active key found' }, { status: 404 });
    }
  ),
  http.delete(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/api-keys/:key`,
    async ({ params }) => {
      const { key } = params;
      if (!key) {
        return HttpResponse.json({ success: false, message: 'Key is required' }, { status: 400 });
      }

      console.log('삭제 전:', apiKeysStore);
      apiKeysStore = apiKeysStore.filter((apiKey) => apiKey.key !== key);
      console.log('삭제 후:', apiKeysStore);

      return HttpResponse.json({ status: 200 });
    }
  ),
];

export default apiKeyHandlers;
