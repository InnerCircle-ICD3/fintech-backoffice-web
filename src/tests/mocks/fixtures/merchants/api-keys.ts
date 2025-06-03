import { ApiKeysResponseType } from '@/api/merchants/schema';

const merchantsApiKeysResponse: ApiKeysResponseType = {
  id: 1,
  key: '123',
  secret: '123',
  active: true,
  createdAt: '2021-01-01',
  expiredAt: '2021-01-01',
};

export const merchantsApiKeys = {
  apiKeysResponse: merchantsApiKeysResponse,
};
