import { LoginFormSchema } from '@/features/auth/login/schema';
import { RegisterFormBaseSchema } from '@/features/auth/register/schema';
import { z } from 'zod';
import { BaseResponseSchema } from '../base/base-schema';

/**
 * POST 로그인 요청
 * /merchants/login
 */
export const LoginRequestSchema = z.object({
  loginId: LoginFormSchema.shape.id,
  loginPw: LoginFormSchema.shape.password,
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  userId: z.number(),
});

export type LoginRequestType = z.infer<typeof LoginRequestSchema>;
export type LoginResponseType = z.infer<typeof LoginResponseSchema>;

/**
 * POST 가맹점 등록 요청
 * /merchants/register
 *
 * @param loginId 로그인 ID
 * @param loginPw 로그인 비밀번호
 * @param name 가맹점 이름
 * @param businessNumber 사업자 번호
 * @param contactName 담당자 이름
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
export const LogoutResponseSchema = BaseResponseSchema;
export type LogoutResponseType = z.infer<typeof BaseResponseSchema>;

/**
 * POST 비밀번호 변경 요청
 * /merchants/update-password
 */
export const UpdatePasswordRequestSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
});

export type UpdatePasswordRequestType = z.infer<typeof UpdatePasswordRequestSchema>;
export const UpdatePasswordResponseSchema = BaseResponseSchema;
