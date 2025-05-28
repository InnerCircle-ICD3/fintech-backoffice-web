import { z } from 'zod';

export const RegisterFormBaseSchema = z.object({
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
  passwordConfirm: z.string({
    required_error: '비밀번호 확인을 입력해주세요.',
  }),

  name: z
    .string({
      required_error: '이름을 입력해주세요.',
    })
    .trim()
    .min(2, '이름은 최소 2자 이상이어야 해요.')
    .max(20, '이름은 최대 20자까지 가능해요.')
    .regex(/^[가-힣a-zA-Z\s]+$/, '이름은 한글과 영문만 입력 가능합니다.'),

  businessNumber: z
    .string({
      required_error: '사업자등록번호를 입력해주세요.',
    })
    .regex(/^[0-9]{3}-[0-9]{2}-[0-9]{5}$/, '사업자등록번호 형식이 올바르지 않습니다.'),

  contactName: z
    .string({
      required_error: '담당자 이름을 입력해주세요.',
    })
    .trim()
    .min(2, '담당자 이름은 최소 2자 이상이어야 해요.')
    .max(20, '담당자 이름은 최대 20자까지 가능해요.')
    .regex(/^[가-힣a-zA-Z\s]+$/, '담당자 이름은 한글과 영문만 입력 가능합니다.'),

  contactEmail: z
    .string({
      required_error: '담당자 이메일을 입력해주세요.',
    })
    .email('올바른 이메일 형식이 아닙니다.')
    .max(50, '이메일은 최대 50자까지 가능합니다.'),

  contactPhone: z
    .string({
      required_error: '담당자 전화번호를 입력해주세요.',
    })
    .regex(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      '올바른 휴대폰 번호 형식이 아닙니다. (예: 010-1234-5678)'
    ),
});

export const RegisterFormSchema = RegisterFormBaseSchema.extend({
  passwordConfirm: z.string({
    required_error: '비밀번호 확인을 입력해주세요.',
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['passwordConfirm'],
});
