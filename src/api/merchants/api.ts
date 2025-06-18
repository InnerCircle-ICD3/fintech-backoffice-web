import { merchantApiClient } from '@/services/api/merchant/api-client';
import {
  MerchantDeleteResponseSchema,
  MerchantInfoResponseSchema,
  MerchantModifyRequestType,
  MerchantModifySchema,
} from './schema';

const getMerchantInfo = async () => {
  return merchantApiClient.get('/merchants/info', {
    schema: MerchantInfoResponseSchema,
  });
};

const updateMerchantInfo = async (payload: MerchantModifyRequestType) => {
  return merchantApiClient.put('/merchants/modify', {
    data: payload,
    schema: MerchantModifySchema,
  });
};

const deleteMerchant = async () => {
  return merchantApiClient.delete('/merchants/delete', {
    schema: MerchantDeleteResponseSchema,
  });
};

/**
 * 가맹점 API 엔드포인트
 */
export const merchantsApi = {
  /** 가맹점 정보 조회 */
  get: getMerchantInfo,
  /** 가맹점 정보 수정 */
  update: updateMerchantInfo,
  /** 가맹점 정보 삭제 */
  delete: deleteMerchant,
};
