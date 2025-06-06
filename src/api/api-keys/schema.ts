import { z } from 'zod';

/** GET API 키 조회 요청 /merchants/api-keys/merchantId */
export const ApiKeysRequestSchema = z.object({
  merchantId: z.number(),
});

/** API 키 스키마 */
export const ApiKeySchema = z.object({
  id: z.number(),
  key: z.string(),
  secret: z.string(),
  active: z.boolean(),
  createdAt: z.string(),
  expiredAt: z.string(),
});

export const ApiKeysResponseSchema = z.array(ApiKeySchema);

/** POST API 키 재발급 요청 /merchants/api-keys/merchantId/reissue?currentKey={currentKey} */
export const ApiKeyReissueRequestSchema = z.object({
  merchantId: z.number(),
  currentKey: z.string(),
});

export const ApiKeyActionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

/** DELETE API 키 비활성화 응답 /merchants/api-keys/key */
export const ApiKeyDeactivateRequestSchema = z.object({
  currentKey: z.string(),
});

/** delete API 키 비활성화 요청 /merchants/api-keys/key */
export const ApiKeyDeleteRequestSchema = z.object({
  key: z.string(),
});

// 타입 추출
export type ApiKeysRequestType = z.infer<typeof ApiKeysRequestSchema>;
export type ApiKeyResponseType = z.infer<typeof ApiKeySchema>;
export type ApiKeysResponseListType = z.infer<typeof ApiKeysResponseSchema>;
export type ApiKeyReissueRequestType = z.infer<typeof ApiKeyReissueRequestSchema>;
export type ApiKeyActionResponse = z.infer<typeof ApiKeyActionResponseSchema>;
export type ApiKeyDeactivateRequestType = z.infer<typeof ApiKeyDeactivateRequestSchema>;
export type ApiKeyDeleteRequestType = z.infer<typeof ApiKeyDeleteRequestSchema>;
