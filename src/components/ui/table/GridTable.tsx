import type { RowTableMetaData } from '@/types/common';
import { formatDate, isEmpty } from '@/utils/common-utils';
import { Fragment } from 'react';
import { formatDay } from 'react-day-picker';

import { table, td, th } from '@/components/ui/table/table.css';

interface DetailTableProps {
  data: Record<string, any>;
  metaData: RowTableMetaData;
  rowSpan?: number;
}

interface RowGroupProps {
  rowGroup: [string, { label: string; format?: string }][];
  label?: string;
}

export const GridTable = (props: DetailTableProps) => {
  const { data, metaData, rowSpan = 2 } = props;

  const rows = Object.entries(metaData);

  let rowGroup: [string, any][] = [];

  const getDisplayValueByKey = (data: Record<string, any>, key: string) => {
    if (key.endsWith('Cd') && data[`${key}Nm`]) {
      return data[`${key}Nm`];
    }

    if (key.endsWith('Yn') && data[`${key}Nm`]) {
      return data[`${key}Nm`];
    }

    if (key === 'vatInclYn') {
      return data?.vatInclYn === 'Y' ? 'Included' : 'Not Included';
    }

    return data[key];
  };

  const applyFormat = (value: any, format?: string) => {
    switch (format) {
      case 'dateTime':
        return formatDate(value, 'YYYY.MM.DD HH:MI:SS');
      case 'date':
        return formatDay(value);
      case 'currency':
        return value.toLocaleString();
      case 'percent':
        return value + '%';
      default:
        return value;
    }
  };

  const getValue = (key: string, format?: string) => {
    const value = data[key];

    if (isEmpty(value)) {
      return '-';
    }

    const labelValue = getDisplayValueByKey(data, key);

    return applyFormat(labelValue, format);
  };

  /*
  행 병합된 row 컴포넌트
  */
  const MergedRow = ({ label, value }: { label: string; value: string }) => {
    return (
      <tr key={label}>
        <td className={th}>{label}</td>
        <td className={td} colSpan={rowSpan * 2 - 1}>
          {value}
        </td>
      </tr>
    );
  };

  /*
  일반 row 컴포넌트
 */
  const RowGroup = ({ rowGroup, label }: RowGroupProps) => {
    return (
      <tr key={label}>
        {rowGroup.map(([key, { label, format }]) => (
          <Fragment key={label}>
            <td className={th}>{label}</td>
            <td className={td}>{getValue(key, format)}</td>
          </Fragment>
        ))}
      </tr>
    );
  };

  /*
    n 개씩 배열하고 남은 row 그려주는 컴포넌트
   */
  const LastFieldRow = ({ rowGroup }: RowGroupProps) => {
    return (
      <tr>
        {rowGroup.map(([key, { label, format }]) => (
          <Fragment key={label}>
            <td className={th}>{label}</td>
            <td className={td}>{getValue(key, format)}</td>
          </Fragment>
        ))}

        {rowGroup.length < rowSpan &&
          Array.from({ length: rowSpan - rowGroup.length }).map((_, index) => (
            <Fragment key={`empty-${index}`}>
              <td className={th}></td>
              <td className={td}></td>
            </Fragment>
          ))}
      </tr>
    );
  };

  return (
    <table className={table}>
      <tbody>
        {rows.map(([key, { label, isMerge, format }], index) => {
          if (isMerge) {
            return <MergedRow key={key} label={label} value={getValue(key, format)} />;
          }

          rowGroup.push([key, { label, format }]);

          if (rowGroup.length < rowSpan) {
            return null;
          }

          const chunk = [...rowGroup];
          rowGroup = [];

          return <RowGroup key={`${index}_rowGroup`} rowGroup={chunk} label={label} />;
        })}

        {rowGroup.length > 0 && <LastFieldRow rowGroup={rowGroup} />}
      </tbody>
    </table>
  );
};
