import { z } from 'zod';
import { BaseResponseSchema } from '../base/base-schema';

/**
 * GET 가맹점 조회 응답
 * /merchants/info
 *
 * @param name 가맹점 이름
 * @param businessNumber 사업자 번호
 * @param contactName 담당자 이름
 * @param contactEmail 담당자 이메일
 * @param contactPhone 담당자 전화번호
 * @param status 가맹점 상태
 */
export const MerchantInfoResponseSchema = z.object({
  name: z.string(),
  businessNumber: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  status: z.string(),
});

export type MerchantInfoResponseType = z.infer<typeof MerchantInfoResponseSchema>;

/**
 * PUT 가맹점 정보 수정
 * /merchants/modify
 *
 * @param name 가맹점 이름
 * @param businessNumber 사업자 번호
 * @param contactName 담당자 이름
 * @param contactEmail 담당자 이메일
 * @param contactPhone 담당자 전화번호
 */
export const MerchantModifySchema = z.object({
  name: z.string(),
  businessNumber: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
});

export type MerchantModifyRequestType = z.infer<typeof MerchantModifySchema>;
export type MerchantModifyResponseType = z.infer<typeof MerchantModifySchema>;

/**
 * DELETE 가맹점 정보 삭제 응답
 * /merchants/delete
 */
export const MerchantDeleteResponseSchema = BaseResponseSchema;
export type MerchantDeleteResponseType = z.infer<typeof BaseResponseSchema>;
