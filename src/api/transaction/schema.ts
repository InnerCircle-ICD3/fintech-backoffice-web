import { z } from 'zod';

/**
 * GET 거래 내역 전체 조회 요청
 * /merchants/payment-histories?merchantId=101&startDate=2025-01-01&endDate=2025-12-30&page=0&size=1&sort=createdAt
 *
 * @param merchantId 가맹점 ID
 * @param status 결제 상태
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 * @param page 페이지 번호
 * @param size 페이지 크기
 * @param sort 정렬 기준
 */
export const TransactionRequestSchema = z.object({
  merchantId: z.number(),
  status: z.string().optional(),
  startDate: z.string(),
  endDate: z.string(),
  page: z.number(),
  size: z.number(),
  sort: z.string(),
});

export type TransactionRequestType = z.infer<typeof TransactionRequestSchema>;

/** GET 거래 내역 전체 조회 응답
 * /merchants/payment-histories?merchantId=101&startDate=2025-01-01&endDate=2025-12-30&page=0&size=1&sort=createdAt
 *
 * @param content 거래 내역 목록
 * @param pageable 페이지 정보
 */
export const TransactionResponseSchema = z.object({
  content: z.array(
    z.object({
      paymentId: z.number(),
      transactionId: z.number(),
      userId: z.number(),
      paymentMethod: z.number(),
      paymentStatus: z.string(),
      paidAmount: z.number(),
      approvedAt: z.string(),
      failReason: z.string().nullable(),
      lastTransactionId: z.number(),
      createdAt: z.string(),
      updatedAt: z.string(),
      cardInfo: z.object({
        cardInfoId: z.number(),
        type: z.string().nullable(),
        last4: z.string().nullable(),
        cardCompany: z.string().nullable(),
        createdAt: z.string().nullable(),
        updatedAt: z.string().nullable(),
      }),
    })
  ),
  pageable: z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    sort: z.object({
      sorted: z.boolean(),
      empty: z.boolean(),
      unsorted: z.boolean(),
    }),
    offset: z.number(),
    paged: z.boolean(),
    unpaged: z.boolean(),
  }),
  last: z.boolean(),
  totalPages: z.number(),
  totalElements: z.number(),
  size: z.number(),
  number: z.number(),
  sort: z.object({
    sorted: z.boolean(),
    empty: z.boolean(),
    unsorted: z.boolean(),
  }),
  first: z.boolean(),
  numberOfElements: z.number(),
  empty: z.boolean(),
});

export type TransactionResponseType = z.infer<typeof TransactionResponseSchema>;

/**
 * GET 거래 내역 상세 조회 요청
 * /merchants/payment-histories/:transactionId
 *
 * @param transactionId 거래 내역 ID
 */
export const TransactionDetailRequestSchema = z.object({
  transactionId: z.number(),
});

export type TransactionDetailRequestType = z.infer<typeof TransactionDetailRequestSchema>;

/** GET 거래 내역 상세 조회 응답
 * /merchants/payment-histories/:transactionId
 *
 * @param paymentId 결제 ID
 * @param transactionId 거래 내역 ID
 * @param userId 사용자 ID
 * @param paymentMethod 결제 방법
 * @param paymentStatus 결제 상태
 * @param paidAmount 결제 금액
 * @param approvedAt 결제 승인 시간
 * @param failReason 결제 실패 이유
 * @param lastTransactionId 마지막 거래 내역 ID
 * @param createdAt 생성 시간
 * @param updatedAt 수정 시간
 * @param cardInfo 카드 정보
 * @param cardInfoId 카드 정보 ID
 * @param type 카드 타입
 * @param last4 카드 번호 뒷자리
 * @param cardCompany 카드 회사
 * @param createdAt 생성 시간
 * @param updatedAt 수정 시간
 */
export const TransactionDetailResponseSchema = z.object({
  paymentId: z.number(),
  transactionId: z.number(),
  userId: z.number(),
  paymentMethod: z.number(),
  paymentStatus: z.string(),
  paidAmount: z.number(),
  approvedAt: z.string(),
  failReason: z.string().nullable(),
  lastTransactionId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  cardInfo: z.object({
    cardInfoId: z.number(),
    type: z.string().nullable(),
    last4: z.string().nullable(),
    cardCompany: z.string().nullable(),
    createdAt: z.string().nullable(),
    updatedAt: z.string().nullable(),
  }),
});

export type TransactionDetailResponseType = z.infer<typeof TransactionDetailResponseSchema>;
