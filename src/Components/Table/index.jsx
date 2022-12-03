import { render } from '@testing-library/react';
import Table from '../Base/Table';

export default function TableComp({ children, columns, data, ...props }) {
  return (
    <Table striped bordered hover responsive {...props}>
      <thead>
        <tr>
          {columns?.map((column, i) => (
            <th key={i}>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((record, i) => (
          <tr key={i}>
            {columns?.map((column, y) => (
              <td key={y}>
                {record.render ? render(record) : record[column] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}