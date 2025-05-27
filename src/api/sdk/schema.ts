import { z } from 'zod';

/** POST sdk키 발급 /sdk/issue */
export const SdkKeyRequestSchema = z.object({
  merchantId: z.string(),
});

export const SdkKeyResponseSchema = z.object({
  sdkKey: z.string(),
  expiresAt: z.string(),
});

export type SdkKeyRequestType = z.infer<typeof SdkKeyRequestSchema>;
export type SdkKeyResponseType = z.infer<typeof SdkKeyResponseSchema>;
