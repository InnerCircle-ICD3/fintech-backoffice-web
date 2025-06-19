import { ApiKeysResponseListType } from '@/api/api-keys/schema';

function createApiKey(id: number) {
  const now = new Date();
  return {
    id,
    key: `key_${id}`,
    secret: `secret_${id}`,
    active: true,
    createdAt: now.toISOString(),
    expiredAt: new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  };
}

const merchantsApiKeysResponseList: ApiKeysResponseListType = [
  createApiKey(Date.now()),
  createApiKey(Date.now() + 1),
];

export const merchantsApiKeys = {
  get: merchantsApiKeysResponseList,
};
