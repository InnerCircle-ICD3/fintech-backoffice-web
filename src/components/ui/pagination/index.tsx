import ArrowIcon from '@/assets/images/icon/icon_arrow.svg?react';
import ReactPaginate from 'react-paginate';

import Flex from '@/components/layout/flex';
import '@/components/ui/pagination/pagination.css';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants/common';
import { vars } from '@/styles/theme.css';

export interface PaginationComponentProps {
  totalCount?: number;
  pageSize?: number;
  forcePage?: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
}

const Pagination = (props: PaginationComponentProps) => {
  const {
    totalCount = 0,
    pageSize = DEFAULT_PAGE_SIZE,
    forcePage = DEFAULT_PAGE,
    onPageChange = () => {},
  } = props;
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <Flex justify={'center'} grow={'wFull'}>
      <ReactPaginate
        className={'pagination-Component'}
        pageCount={pageCount}
        forcePage={forcePage - 1}
        onPageChange={onPageChange}
        previousLabel={
          <ArrowIcon fill={vars.color.text.main} style={{ transform: 'rotate(90deg)' }} />
        }
        nextLabel={
          <ArrowIcon fill={vars.color.text.main} style={{ transform: 'rotate(270deg)' }} />
        }
        breakLabel={'...'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'break'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        activeClassName={'active'}
        disabledClassName={'disabled'}
      />
    </Flex>
  );
};

export default Pagination;
