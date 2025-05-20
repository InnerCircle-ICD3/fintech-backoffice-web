export interface Paging {
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  size: number;
  setSize: (pageSize: number) => void;
}

export interface RowTableMetaData {
  [key: string]: {
    label: string;
    isMerge?: boolean;
    format?: 'date' | 'dateTime' | 'time' | 'currency' | 'percent';
  };
}
