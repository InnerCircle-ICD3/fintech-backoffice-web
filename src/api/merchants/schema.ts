import { z } from 'zod';

/** GET 가맹점 조회 응답 /merchants/info */
export const MerchantInfoResponseSchema = z.object({
  name: z.string(),
  merchantId: z.string(),
  businessNumber: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  status: z.string(),
});

/** PUT 가맹점 정보 수정 요청 /merchants/modify */
export const MerchantModifyRequestSchema = z.object({
  // loginId: z.string(),
  // loginPw: z.string(),
  name: z.string(),
  businessNumber: z.string(),
  contactName: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
});

/** PUT 가맹점 정보 수정 응답 /merchants/modify */
export const MerchantModifyResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

/** DELETE 가맹점 정보 삭제 /merchants/delete */
export const MerchantDeleteResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type MerchantInfoResponseType = z.infer<typeof MerchantInfoResponseSchema>;
export type MerchantModifyRequestType = z.infer<typeof MerchantModifyRequestSchema>;
export type MerchantModifyResponseType = z.infer<typeof MerchantModifyResponseSchema>;
