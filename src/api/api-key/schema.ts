import { z } from 'zod';

/** GET API 키 조회 응답 /merchants/api-keys/merchantId */
export const ApiKeysResponseSchema = z.object({
  id: z.number(),
  key: z.string(),
  secret: z.string(),
  active: z.boolean(),
  createdAt: z.string(),
  expiredAt: z.string(),
});

/** POST API 키 재발급 요청 /merchants/api-keys/merchantId/reissue?currentKey={currentKey} */
export const ApiKeyReissueRequestSchema = z.object({
  merchantId: z.number(),
  currentKey: z.string(),
});

/** delete API 키 비활성화 요청 /merchants/api-keys/key */
export const ApiKeyDeleteRequestSchema = z.object({
  key: z.string(),
});

// 타입 추출
export type ApiKeysResponseType = z.infer<typeof ApiKeysResponseSchema>;
export type ApiKeyReissueRequestType = z.infer<typeof ApiKeyReissueRequestSchema>;
export type ApiKeyDeleteRequestType = z.infer<typeof ApiKeyDeleteRequestSchema>;
