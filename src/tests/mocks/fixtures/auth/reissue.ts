import { ReissueResponseType } from '@/api/auth/schema';

const reissueResponse: ReissueResponseType = {
  accessToken: 'newabce1234',
  refreshToken: 'newdfghj23456',
};

export const reissue = {
  response: reissueResponse,
};
