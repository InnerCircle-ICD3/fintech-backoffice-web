import { z } from 'zod';

export const LoginFormSchema = z.object({
  id: z
    .string({
      required_error: '아이디를 입력해주세요.',
    })
    .trim()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,20}$/,
      '아이디는 영문과 숫자를 포함한 4~20자로 입력해주세요.'
    )
    .min(4, '아이디는 최소 4자 이상이어야 해요.')
    .max(20, '아이디는 최대 20자까지 가능해요.'),

  password: z
    .string({
      required_error: '비밀번호를 입력해주세요.',
    })
    .trim()
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 20자 이하여야 합니다.')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '비밀번호는 영문자, 숫자, 특수기호를 포함해야 합니다.'
    ),
});
