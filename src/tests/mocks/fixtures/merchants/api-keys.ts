import { ApiKeyResponseType, ApiKeysResponseListType } from '@/api/api-keys/schema';

const merchantsApiKeysResponseList: ApiKeysResponseListType = [
  {
    id: Date.now(),
    key: 'test_key_01',
    secret: 'test_key_012345678901',
    active: true,
    createdAt: '2025-06-06T07:33:02.340Z',
    expiredAt: '2025-06-06T07:33:02.340Z',
  },
  {
    id: Date.now() + 1,
    key: 'test_key_02',
    secret: 'test_key_021234567890',
    active: true,
    createdAt: '2025-06-07T07:33:02.340Z',
    expiredAt: '2025-06-07T07:33:02.340Z',
  },
];

const merchantsApiKeyResponse: ApiKeyResponseType = {
  id: Date.now() + 2,
  key: 'test_key_03',
  secret: 'test_key_03123456789',
  active: true,
  createdAt: new Date().toISOString(),
  expiredAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
};

const merchantsApiKeyReissueResponse: ApiKeyResponseType = {
  id: Date.now() + 3,
  key: 'test_key_04',
  secret: 'test_key_04123124121',
  active: true,
  createdAt: new Date().toISOString(),
  expiredAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
};

export const merchantsApiKeys = {
  get: merchantsApiKeysResponseList,
  post: merchantsApiKeyResponse,
  reissue: merchantsApiKeyReissueResponse,
};
