import { HTMLAttributes, ReactNode } from 'react';
import { table, tableContainer, th } from '@/components/ui/table/table.css';

interface IBasicTableProps extends HTMLAttributes<HTMLTableElement> {
  columns: any;
  tbody: ReactNode;
}

const BasicTable = (props: IBasicTableProps) => {
  const { columns, tbody, ...attribute } = props;

  return (
    <div className={tableContainer}>
      <table width={'100%'} className={table} {...attribute}>
        <thead>
          <tr>
            {columns.map((column: any) => (
              <th className={th} key={column.id} style={{ width: column?.width }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
};

export default BasicTable;
