import { z } from 'zod';
import { BaseResponseSchema } from '../base/base-schema';

/**
 * GET API 키 조회 요청
 * /merchants/api-keys/merchantId
 *
 * @param merchantId 가맹점 ID
 */
export const ApiKeysRequestSchema = z.object({
  merchantId: z.number(),
});

export type ApiKeysRequestType = z.infer<typeof ApiKeysRequestSchema>;

/**
 * GET API 키 조회 응답
 * /merchants/api-keys/merchantId
 *
 * @param id API 키 ID
 * @param key API 키
 * @param secret API 키 시크릿
 * @param active API 키 활성 여부
 * @param createdAt API 키 생성 일시
 * @param expiredAt API 키 만료 일시
 */
export const ApiKeySchema = z.object({
  id: z.number(),
  key: z.string(),
  secret: z.string(),
  active: z.boolean(),
  createdAt: z.string(),
  expiredAt: z.string(),
});

export type ApiKeyResponseType = z.infer<typeof ApiKeySchema>;
export const ApiKeysResponseSchema = z.array(ApiKeySchema);
export type ApiKeysResponseListType = z.infer<typeof ApiKeysResponseSchema>;

/**
 * POST API 키 재발급 요청
 * /merchants/api-keys/merchantId/reissue?currentKey={currentKey}
 *
 * @param merchantId 가맹점 ID
 * @param currentKey 현재 API 키
 */
export const ApiKeyReissueRequestSchema = z.object({
  merchantId: z.number(),
  currentKey: z.string(),
});

export type ApiKeyReissueRequestType = z.infer<typeof ApiKeyReissueRequestSchema>;

/**
 * POST API 키 재발급 응답
 * /merchants/api-keys/merchantId/reissue?currentKey={currentKey}
 */
export const ApiKeyActionResponseSchema = BaseResponseSchema.shape;
export type ApiKeyActionResponseType = z.infer<typeof BaseResponseSchema>;

/**
 * DELETE API 키 비활성화 응답
 * /merchants/api-keys/key
 *
 * @param success 성공 여부
 * @param message 메시지
 */
export const ApiKeyDeactivateRequestSchema = z.object({
  currentKey: z.string(),
});

export type ApiKeyDeactivateRequestType = z.infer<typeof ApiKeyDeactivateRequestSchema>;

/**
 * DELETE API 키 비활성화 요청
 * /merchants/api-keys/key
 *
 * @param key API 키
 */
export const ApiKeyDeleteRequestSchema = z.object({
  key: z.string(),
});

export type ApiKeyDeleteRequestType = z.infer<typeof ApiKeyDeleteRequestSchema>;
