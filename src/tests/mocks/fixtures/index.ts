import { login, reissue } from './auth';
import { merchantsApiKeys } from './merchants/api-keys';
import { merchantsInfo } from './merchants/info';
import { sdkIssue } from './sdk/issue';

export default {
  login,
  reissue,
  sdkIssue,
  merchantsApiKeys,
  merchantsInfo,
};
