import { LoginFormSchema } from '@/pages/auth/login/schema';
import { RegisterFormBaseSchema } from '@/pages/auth/register/schema';
import { z } from 'zod';

/**
 * 로그인
 * /merchants/login
 */
export const LoginRequestSchema = z.object({
  loginId: LoginFormSchema.shape.id,
  loginPw: LoginFormSchema.shape.password,
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

/**
 * 가맹점 등록
 * /merchants/register
 */
export const RegisterRequestSchema = z.object({
  loginId: RegisterFormBaseSchema.shape.id,
  loginPw: RegisterFormBaseSchema.shape.password,
  name: RegisterFormBaseSchema.shape.name,
  businessNumber: RegisterFormBaseSchema.shape.businessNumber,
  contactName: RegisterFormBaseSchema.shape.contactName,
  contactEmail: RegisterFormBaseSchema.shape.contactEmail,
  contactPhone: RegisterFormBaseSchema.shape.contactPhone,
});

export const RegisterResponseSchema = z.object({
  merchantId: z.number(),
  loginId: z.string(),
  name: z.string(),
  status: z.string(),
});

export type RegisterRequestType = z.infer<typeof RegisterRequestSchema>;
export type RegisterResponseType = z.infer<typeof RegisterResponseSchema>;

export type LoginRequestType = z.infer<typeof LoginRequestSchema>;
export type LoginResponseType = z.infer<typeof LoginResponseSchema>;

/**
 * 엑세스토큰 재발급
 * /merchants/reissue
 */
export const ReissueResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type ReissueResponseType = z.infer<typeof ReissueResponseSchema>;

/**
 * 로그아웃
 * /merchants/logout
 */
export const LogoutResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type LogoutResponseType = z.infer<typeof LogoutResponseSchema>;
