import type { MerchantInfoResponseType } from '@/api/merchants/schema';

export const formatMerchantInfo = (response: MerchantInfoResponseType) => ({
  merchantId: response.merchantId,
  name: response.name,
  businessNumber: response.businessNumber,
  contact: {
    name: response.contactName,
    email: response.contactEmail,
    phone: response.contactPhone,
  },
  status: response.status,
});

export type MerchantInfoType = ReturnType<typeof formatMerchantInfo>;
