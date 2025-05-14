export interface Paging {
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  size: number;
  setSize: (pageSize: number) => void;
}
