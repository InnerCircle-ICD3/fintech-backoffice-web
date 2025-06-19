import { z } from 'zod';

/**
 * 기본 응답 스키마
 *
 * @param success 성공 여부
 * @param message 메시지
 */
export const BaseResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
