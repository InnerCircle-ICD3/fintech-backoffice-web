import { type CSSProperties, useEffect, useRef, useState } from 'react';

import {
  type Column,
  type ColumnDef,
  type ColumnPinningState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Flex from '@/components/layout/flex';
import Nodata, { type NodataProps } from '@/components/ui/Nodata';
import Card, { type CardVariants } from '@/components/ui/card';
import Pagination from '@/components/ui/pagination';
import Spinner from '@/components/ui/spinner';
import { table, tableContainer, td, th, tr } from '@/components/ui/table/table.css';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants/common';
import { vars } from '@/styles/theme.css';
import type { Paging } from '@/types/common';
import { getCurrentDate } from '@/utils/common-utils';
import { TableSubHeader, type TableSubHeaderProps } from './TableSubHeader';

type ColumnMeta = {
  textAlign?: 'left' | 'center' | 'right';
};

export type CustomColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  meta?: ColumnMeta;
};

type CustomTableProps<T> = CardVariants &
  NodataProps &
  Pick<TableSubHeaderProps, 'countLabel' | 'isShowCount' | 'headerButton'> & {
    data: T[];
    columns: CustomColumnDef<T>[];
    columnPinning?: ColumnPinningState;
    paging?: Paging;
    isPaging?: boolean;
    isPending?: boolean;
    isFetching?: boolean;
    isSubHeader?: boolean;
    isClickable?: boolean;
    onRowClick?: (row: any) => void;
  };

export const CustomTable = <T,>(props: CustomTableProps<T>) => {
  const {
    data,
    columns,
    columnPinning = { left: [], right: [] },
    paging = {
      totalCount: 0,
      page: DEFAULT_PAGE,
      setPage: () => {},
      size: DEFAULT_PAGE_SIZE,
      setSize: () => {},
    },
    isPaging = true,
    isPending,
    isFetching,
    isSubHeader = true,
    isClickable = false,
    onRowClick = () => {},
    noDataMessage,
    countLabel,
    isShowCount,
    headerButton,
    type,
  } = props;

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const [hasScroll, setHasScroll] = useState<boolean>(false);
  const [searchTime, setSearchTime] = useState<string | null>('');

  const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
    const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

    return {
      position: isPinned ? 'sticky' : 'relative',
      zIndex: isPinned ? 1 : 0,
      left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
      ...(isLastLeftPinnedColumn && {
        borderRight: `1px solid ${vars.color.primary}`,
      }),
      ...(isFirstRightPinnedColumn && {
        borderLeft: `1px solid ${vars.color.primary}`,
      }),
    };
  };

  const tableConfig = useReactTable<any>({
    data,
    columns,
    defaultColumn: {
      enableResizing: true,
    },
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnPinning: hasScroll ? columnPinning : { left: [], right: [] },
    },
  });

  useEffect(() => {
    const checkHorizontalScroll = () => {
      if (!tableContainerRef.current) {
        return;
      }

      const { scrollWidth, clientWidth } = tableContainerRef.current;

      setHasScroll(scrollWidth > clientWidth);
    };

    checkHorizontalScroll();

    window.addEventListener('resize', checkHorizontalScroll);

    return () => {
      window.removeEventListener('resize', checkHorizontalScroll);
    };
  }, [data]);

  useEffect(() => {
    setSearchTime(getCurrentDate());
  }, [data]);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      {isFetching && <Spinner />}

      <Card type={type}>
        <Flex direction={'column'} grow={'full'} gap={'16px'}>
          {isSubHeader && (
            <TableSubHeader
              totalCount={paging?.totalCount}
              searchTime={searchTime}
              countLabel={countLabel}
              isShowCount={isShowCount}
              headerButton={headerButton}
            />
          )}

          {!data || data?.length === 0 ? (
            <Nodata noDataMessage={noDataMessage} />
          ) : (
            <>
              <div ref={tableContainerRef} className={tableContainer}>
                <table className={table}>
                  <thead>
                    {tableConfig.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          const column = columns.find((column) => column.id === header.id);
                          const { size, minSize, meta } = column || {};

                          return (
                            <th
                              key={header.id}
                              className={th}
                              style={{
                                width: !size ? 'auto' : size,
                                ...(minSize && { minWidth: minSize }),
                                ...(size && { maxWidth: size }),
                                textAlign: meta?.textAlign || 'left',
                                ...getCommonPinningStyles(header.column),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )?.toString() || ''}
                            </th>
                          );
                        })}
                      </tr>
                    ))}
                  </thead>

                  <tbody>
                    {tableConfig.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className={tr({ clickable: isClickable })}
                        onClick={() => onRowClick(row.original)}
                      >
                        {row.getVisibleCells().map((cell) => {
                          const column = columns.find((column) => column.id === cell.column.id);
                          const { size, minSize, meta } = column || {};

                          return (
                            <td
                              key={cell.id}
                              className={td}
                              style={{
                                width: !size ? 'auto' : size,
                                ...(minSize && {
                                  minWidth: minSize,
                                  width: minSize,
                                }),
                                ...(size && { maxWidth: size }),
                                textAlign: meta?.textAlign || 'left',
                                ...getCommonPinningStyles(cell.column),
                              }}
                            >
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {isPaging && (
                <Pagination
                  totalCount={paging?.totalCount}
                  forcePage={paging?.page - 1}
                  pageSize={paging?.size}
                  onPageChange={(value) => paging?.setPage(value.selected + 1)}
                />
              )}
            </>
          )}
        </Flex>
      </Card>
    </>
  );
};
