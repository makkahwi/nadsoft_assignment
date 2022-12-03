import { render } from '@testing-library/react';
import Table from '../Base/Table';

export default function TableComp({ columns, data, className, ...props }) {
  return (
    <Table striped bordered hover responsive className={`my-3 text-center ${className}`} {...props}>
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
        {data.length ? (
          data?.map((record, i) => (
            <tr key={i}>
              {columns?.map((column, y) => (
                <td key={y}>
                  {column.render ? render(record) : record[column.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="100%">
              No Results Found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}