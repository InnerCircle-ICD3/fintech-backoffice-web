import { z } from 'zod';
import { BaseResponseSchema } from '../base/base-schema';

/**
 * GET sdk키 조회 응답
 * /sdk-key
 *
 * @param sdkKey sdk키
 */
/**
 * GET sdk키 조회 응답
 * /sdk-key
 *
 * @param sdkKey sdk키
 */
export const SdkKeyResponseSchema = z.object({
  sdkKey: z.string(),
});

export type SdkKeyResponseType = z.infer<typeof SdkKeyResponseSchema>;

/**
 * POST sdk키 활성화 응답
 * /sdk-key/activate
 */
export const SdkKeyActivateResponseSchema = BaseResponseSchema;
export type SdkKeyActivateResponseType = z.infer<typeof BaseResponseSchema>;

/**
 * POST sdk키 비활성화 응답
 * /sdk-key/deactivate
 */
export const SdkKeyDeactivateResponseSchema = BaseResponseSchema;
export type SdkKeyDeactivateResponseType = z.infer<typeof BaseResponseSchema>;

/** sdk키 재발급 요청
 * /sdk-key/regenerate
 */
export const SdkKeyRegenerateResponseSchema = BaseResponseSchema;
export type SdkKeyRegenerateResponseType = z.infer<typeof BaseResponseSchema>;
