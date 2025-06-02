import { MerchantInfoResponseType } from '@/api/merchants/schema';

const merchantsInfoResponse: MerchantInfoResponseType = {
  name: '홍길동 가맹점',
  merchantId: '123',
  businessNumber: '123-45-67890',
  contactName: '홍길동',
  contactEmail: 'hong@merchant.com',
  contactPhone: '010-1234-5678',
  status: 'ACTIVE',
};

export const merchantsInfo = {
  infoResponse: merchantsInfoResponse,
};
