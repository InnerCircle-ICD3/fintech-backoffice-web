import { login, reissue } from './auth';
import { merchantsApiKeys } from './merchants/api-keys';
import { merchantsInfo } from './merchants/info';
import { sdkKey } from './merchants/sdk-keys';

export default {
  login,
  reissue,
  sdkKey,
  merchantsApiKeys,
  merchantsInfo,
};
