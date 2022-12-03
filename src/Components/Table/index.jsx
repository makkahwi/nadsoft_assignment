import { render } from '@testing-library/react';
import Table from '../Base/Table';

export default function TableComp({ columns, data, onView, className, ...props }) {
  const generateColumnTitle = key => key?.split("")?.map((letter, i) => i === 0 ? letter : letter === letter.toUpperCase() ? ` ${letter}` : letter).join("")
  const generateColumnTotal = key => data.reduce((final, record) => final += record[key], 0);

  return (
    <Table striped bordered hover responsive className={`my-3 text-center ${className}`} {...props}>
      <thead>
        <tr>
          {columns?.map((column, i) => (
            <th key={i}>
              {column.title || generateColumnTitle(column.key)}
            </th>
          ))}

          {onView && (
            <th>
              Actions
            </th>
          )}
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

              {onView && (
                <th>
                  <span role="button" onClick={() => onView(record)}>
                    Details
                  </span>
                </th>
              )}
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

      <tfoot>
        <tr>
          {columns?.map((column, i) => (
            <th key={i}>
              {column.generateTotal ? generateColumnTotal(column.key) : column.footer || "-"}
            </th>
          ))}

          {onView && (
            <th>
              -
            </th>
          )}
        </tr>
      </tfoot>
    </Table>
  );
}