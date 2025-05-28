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

export type MerchantInfoResponseType = z.infer<typeof MerchantInfoResponseSchema>;
