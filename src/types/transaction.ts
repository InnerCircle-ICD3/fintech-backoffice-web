export interface CardTransactionType {
  trDt: string; // 거래일자 (YYYYMMDD)
  trTm: string; // 거래시간 (HHmmss)
  cardCompany: string;
  cardNumber: string;
  merchantId: string;
  merchantName: string;
  approvalAmount: number;
  fee: number;
  status: '매입완료' | '매입예정' | '승인취소';
}
