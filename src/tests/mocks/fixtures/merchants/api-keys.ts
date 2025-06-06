import { ApiKeyResponseType, ApiKeysResponseListType } from '@/api/api-keys/schema';

const merchantsApiKeysResponseList: ApiKeysResponseListType = [
  {
    id: 1,
    key: 'b9b5bc33-38f7-466f-bfaf-1234567890ab123',
    secret: 'b9b5bc33-38f7-466f-bfaf-1234567890ab12355',
    active: true,
    createdAt: '2025-06-06T07:33:02.340Z',
    expiredAt: '2025-06-06T07:33:02.340Z',
  },
  {
    id: 2,
    key: 'b9b5bc33-38f7-466f-bfaf-1234567890ab123',
    secret: 'b9b5bc33-38f7-466f-bfaf-1234567890ab12355',
    active: true,
    createdAt: '2025-06-06T07:33:02.340Z',
    expiredAt: '2025-06-06T07:33:02.340Z',
  },
];

const merchantsApiKeyResponse: ApiKeyResponseType = {
  id: 1,
  key: 'test-client-key',
  secret: 'test-secret-key',
  active: true,
  createdAt: '2025-06-06T07:33:02.340Z',
  expiredAt: '2025-06-06T07:33:02.340Z',
};

export const merchantsApiKeys = {
  get: merchantsApiKeysResponseList,
  post: merchantsApiKeyResponse,
  reissue: merchantsApiKeyResponse,
};
