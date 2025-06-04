import { z } from 'zod';

export const MerchantInfoSchema = z.object({
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
