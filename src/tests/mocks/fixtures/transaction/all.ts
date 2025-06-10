import { TransactionResponseType } from '@/api/transaction/schema';

const generateTransactions = () => {
  const statuses = ['COMPLETED', 'FAILED', 'REQUESTED'];
  const cardCompanies = ['SAMSUNG CARD', 'HYUNDAI CARD', 'HANA CARD', 'KB CARD', 'WOORI CARD'];

  // 최근 7일치 날짜 생성
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  });

  return Array.from({ length: 23 }, (_, index) => ({
    paymentId: 10000 + index + 1,
    transactionId: 30001 + index,
    userId: 2001,
    paymentMethod: 3,
    paymentStatus: statuses[index % 3],
    paidAmount: Math.floor(Math.random() * 100000) + 10000,
    approvedAt: `${dates[index % 7]}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}.000Z`,
    failReason: null,
    lastTransactionId: 30001 + index,
    createdAt: `${dates[index % 7]}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}.000Z`,
    updatedAt: `${dates[index % 7]}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}.000Z`,
    cardInfo: {
      cardInfoId: index + 1,
      type: null,
      last4: Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0'),
      cardCompany: cardCompanies[index % cardCompanies.length],
      createdAt: null,
      updatedAt: null,
    },
  }));
};

const TransactionResponse: TransactionResponseType = {
  content: generateTransactions(),
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    sort: {
      sorted: true,
      empty: false,
      unsorted: false,
    },
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: false,
  totalPages: 3,
  totalElements: 23,
  size: 10,
  number: 0,
  sort: {
    sorted: true,
    empty: false,
    unsorted: false,
  },
  first: true,
  numberOfElements: 10,
  empty: false,
};

export const transactionAll = {
  response: TransactionResponse,
};
