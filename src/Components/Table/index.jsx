import { render } from '@testing-library/react';
import Table from '../Base/Table';

export default function TableComp({ columns, data, className, ...props }) {
  return (
    <Table striped bordered hover responsive className={`my-3 ${className}`} {...props}>
      <thead>
        <tr>
          {columns?.map((column, i) => (
            <th key={i}>
              {column.title || column.key}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((record, i) => (
          <tr key={i}>
            {columns?.map((column, y) => (
              <td key={y}>
                {column.render ? render(record) : record[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}