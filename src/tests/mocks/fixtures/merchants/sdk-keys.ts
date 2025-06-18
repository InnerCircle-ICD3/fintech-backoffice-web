import {
  SdkKeyActivateResponseType,
  SdkKeyDeactivateResponseType,
  SdkKeyRegenerateResponseType,
  SdkKeyResponseType,
} from '@/api/sdk/schema';

const sdkKeyResponse: SdkKeyResponseType = {
  sdkKey: 'b9b5bc33-38f7-466f-bfaf-1234567890ab',
};

const sdkKeyActivateResponse: SdkKeyActivateResponseType = {
  success: true,
  message: 'SDK 키 활성화 성공',
};

const sdkKeyDeactivateResponse: SdkKeyDeactivateResponseType = {
  success: true,
  message: 'SDK 키 비활성화 성공',
};

const sdkKeyRegenerateResponse: SdkKeyRegenerateResponseType = {
  success: true,
  message: 'SDK 키 재발급 성공',
};

export const sdkKey = {
  get: sdkKeyResponse,
  activate: sdkKeyActivateResponse,
  deactivate: sdkKeyDeactivateResponse,
  regenerate: sdkKeyRegenerateResponse,
};
