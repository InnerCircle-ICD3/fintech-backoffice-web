import { z } from 'zod';

/** POST sdk키 조회 /sdk-key */
export const SdkKeyResponseSchema = z.object({
  sdkKey: z.string(),
});

export const SdkKeyActivateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export const SdkKeyDeactivateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type SdkKeyResponseType = z.infer<typeof SdkKeyResponseSchema>;
export type SdkKeyActivateResponseType = z.infer<typeof SdkKeyActivateResponseSchema>;
export type SdkKeyDeactivateResponseType = z.infer<typeof SdkKeyDeactivateResponseSchema>;
