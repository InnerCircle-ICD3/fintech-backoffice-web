import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const transactionHandlers = [
  http.get(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/payment-histories`,
    async ({ request }) => {
      const url = new URL(request.url);
      const status = url.searchParams.get('status');
      const startDate = url.searchParams.get('startDate');
      const endDate = url.searchParams.get('endDate');
      const page = Number(url.searchParams.get('page') || '0');
      const size = Number(url.searchParams.get('size') || '10');

      let filteredData = [...fixtures.transactionAll.response.content];

      // 상태 필터링
      if (status) {
        filteredData = filteredData.filter((item) => item.paymentStatus === status);
      }

      // 날짜 필터링
      if (startDate && endDate) {
        const startDateTime = new Date(startDate);
        const endDateTime = new Date(endDate);
        // endDate는 해당 일자의 마지막 시간(23:59:59)까지 포함
        endDateTime.setHours(23, 59, 59, 999);

        filteredData = filteredData.filter((item) => {
          const itemDate = new Date(item.createdAt);
          return itemDate >= startDateTime && itemDate <= endDateTime;
        });
      }

      // createdAt 기준 최신순 정렬
      filteredData.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      // 페이지네이션
      const totalElements = filteredData.length;
      const totalPages = Math.ceil(totalElements / size);
      const start = page * size;
      const end = start + size;
      const paginatedData = filteredData.slice(start, end);

      return HttpResponse.json(
        {
          ...fixtures.transactionAll.response,
          content: paginatedData,
          totalElements,
          totalPages,
          size,
          number: page,
          last: page >= totalPages - 1,
          first: page === 0,
          numberOfElements: paginatedData.length,
          empty: paginatedData.length === 0,
          pageable: {
            ...fixtures.transactionAll.response.pageable,
            pageNumber: page,
            pageSize: size,
            offset: start,
          },
          sort: {
            sorted: true,
            empty: false,
            unsorted: false,
          },
        },
        { status: 200 }
      );
    }
  ),
  http.get(
    `${import.meta.env.VITE_BACKOFFICE_API_URL}/merchants/payment-histories/:transactionId`,
    async () => {
      return HttpResponse.json(fixtures.transactionDetail.response, { status: 200 });
    }
  ),
];

export default transactionHandlers;
