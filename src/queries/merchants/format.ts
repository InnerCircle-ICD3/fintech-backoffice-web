import { MerchantInfoResponseType } from '@/api/merchants/info/schema';

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

export type MerchantInfo = ReturnType<typeof formatMerchantInfo>;
