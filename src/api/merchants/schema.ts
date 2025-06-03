import { z } from 'zod';

/** GET 가맹점조회 /merchants/info */
export const MerchantInfoResponseSchema = z.object({
  name: z.string(),
  merchantId: z.string(),
  businessNumber: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  status: z.string(),
});

/** POST 키 발급 /merchants/api-keys */
export const ApiKeysResponseSchema = z.object({
  id: z.number(),
  key: z.string(),
  secret: z.string(),
  active: z.boolean(),
  createdAt: z.string(),
  expiredAt: z.string(),
});

/** api키 발급 /merchants/api-keys */
export const ApiKeyRequestSchema = z.object({
  merchantId: z.string(),
});

export type MerchantInfoResponseType = z.infer<typeof MerchantInfoResponseSchema>;
export type ApiKeysResponseType = z.infer<typeof ApiKeysResponseSchema>;
export type ApiKeyRequestType = z.infer<typeof ApiKeyRequestSchema>;
