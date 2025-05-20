import { RowTableMetaData } from '@/types/commonType';

export const cardTransactionList = {
  page: {
    totalCount: 8,
    page: 1,
    size: 10,
  },
  list: [
    {
      trDt: '20250507',
      trTm: '221933',
      cardCompany: '롯데카드',
      cardNumber: '****-****-6529',
      merchantId: 'M000001',
      merchantName: '전윤 홍성군점',
      approvalAmount: 81854,
      fee: 3080,
      status: '매입완료',
    },
    {
      trDt: '20250510',
      trTm: '060646',
      cardCompany: '롯데카드',
      cardNumber: '****-****-4589',
      merchantId: 'M000002',
      merchantName: '주식회사 오이허 부천시 오정구점',
      approvalAmount: 93551,
      fee: 1280,
      status: '매입예정',
    },
    {
      trDt: '20250414',
      trTm: '232742',
      cardCompany: '국민카드',
      cardNumber: '****-****-5540',
      merchantId: 'M000003',
      merchantName: '장김이 춘천시점',
      approvalAmount: 87809,
      fee: 1355,
      status: '매입완료',
    },
    {
      trDt: '20250507',
      trTm: '221933',
      cardCompany: '롯데카드',
      cardNumber: '****-****-6529',
      merchantId: 'M000001',
      merchantName: '전윤 홍성군점',
      approvalAmount: 81854,
      fee: 3080,
      status: '매입완료',
    },
    {
      trDt: '20250510',
      trTm: '060646',
      cardCompany: '롯데카드',
      cardNumber: '****-****-4589',
      merchantId: 'M000002',
      merchantName: '주식회사 오이허 부천시 오정구점',
      approvalAmount: 93551,
      fee: 1280,
      status: '매입예정',
    },
    {
      trDt: '20250414',
      trTm: '232742',
      cardCompany: '국민카드',
      cardNumber: '****-****-5540',
      merchantId: 'M000003',
      merchantName: '장김이 춘천시점',
      approvalAmount: 87809,
      fee: 1355,
      status: '매입완료',
    },
    {
      trDt: '20250507',
      trTm: '221933',
      cardCompany: '롯데카드',
      cardNumber: '****-****-6529',
      merchantId: 'M000001',
      merchantName: '전윤 홍성군점',
      approvalAmount: 81854,
      fee: 3080,
      status: '매입완료',
    },
    {
      trDt: '20250510',
      trTm: '060646',
      cardCompany: '롯데카드',
      cardNumber: '****-****-4589',
      merchantId: 'M000002',
      merchantName: '주식회사 오이허 부천시 오정구점',
      approvalAmount: 93551,
      fee: 1280,
      status: '매입예정',
    },
  ],
};

export const transactionDetailMetaData: RowTableMetaData = {
  trDt: {
    label: '승인일자',
  },
  trTm: {
    label: '승인시간',
  },
  cardCompany: {
    label: '카드사',
  },
  cardNumber: {
    label: '카드번호',
  },
  merchantId: {
    label: '가맹점 ID',
  },
  merchantName: {
    label: '가맹점명',
    isMerge: true, // 병합해도 괜찮은 필드 (긴 값이라)
  },
  approvalAmount: {
    label: '승인금액',
    format: 'currency',
  },
  fee: {
    label: '수수료',
    format: 'currency',
  },
  status: {
    label: '매입상태',
  },
};
