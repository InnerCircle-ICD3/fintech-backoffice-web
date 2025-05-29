import { SdkKeyRequestType, SdkKeyResponseType } from '@/api/sdk/schema';
import { merchantsInfo } from '../merchants/info';

const sdkIssueRequest: SdkKeyRequestType = {
  merchantId: merchantsInfo.infoResponse.merchantId,
};

const sdkIssueResponse: SdkKeyResponseType = {
  sdkKey: 'sdk_1234-uuid',
  expiresAt: '2025-11-12T15:30:00',
};

export const sdkIssue = {
  request: sdkIssueRequest,
  response: sdkIssueResponse,
};
