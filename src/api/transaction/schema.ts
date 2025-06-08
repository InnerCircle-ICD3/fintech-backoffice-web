import { z } from 'zod';

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

/** GET 거래 내역 전체 조회 /merchants/payment-histories?merchantId=101&startDate=2025-01-01&endDate=2025-12-30&page=0&size=1&sort=createdAt */
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

export const TransactionDetailRequestSchema = z.object({
  transactionId: z.number(),
});

/** GET 거래 내역 상세 조회 /merchants/payment-histories/:transactionId */
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

export type TransactionDetailRequestType = z.infer<typeof TransactionDetailRequestSchema>;
export type TransactionDetailResponseType = z.infer<typeof TransactionDetailResponseSchema>;
