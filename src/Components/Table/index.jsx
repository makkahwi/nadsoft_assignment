import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { generateTitleOutOfCamelCaseKey } from '../../Helpers/utils';
import Table from '../Base/Table';
import PropTypes from 'prop-types';

export default function TableComp({ columns, data = [], onView, className, ...props }) {
  const [sortedData, setSortedData] = useState([]);
  const [sortingKey, setSortingKey] = useState({});
  const generateColumnTotal = key => sortedData?.reduce((final, record) => final += record[key], 0);

  const onSorting = (column) => {
    const unsortedData = [...data];

    if (sortingKey?.key === column && sortingKey?.order === "desc") {
      setSortingKey({});
      setSortedData([...unsortedData]);
    } else if (sortingKey?.key === column && sortingKey?.order === "asc") {
      setSortingKey(current => ({ ...current, order: "desc" }));
      setSortedData([...unsortedData?.sort((a, b) => a[column] - b[column])]);
    } else {
      setSortingKey({ key: column, order: "asc" });
      setSortedData([...unsortedData?.sort((a, b) => b[column] - a[column])]);
    }
  };

  const sortingIcon = column => {
    if (sortingKey?.key === column) {
      if (sortingKey?.order === "asc") {
        return "\u2191"
      } else {
        return "\u2193"
      }
    } else {
      return "\u2194"
    }
  };

  useEffect(() => setSortedData([...data]), [data])

  return (
    <Table striped bordered hover responsive className={`my-3 text-center ${className}`} {...props}>
      <thead>
        <tr>
          {columns?.map((column, i) => (
            <th key={i}>
              {column?.title || generateTitleOutOfCamelCaseKey(column?.key)}

              {column?.sortable && (
                <span role="button" className="mx-1" onClick={() => onSorting(column?.key)} >
                  {sortingIcon(column?.key)}
                </span>
              )}
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
        {sortedData.length ? (
          sortedData?.map((record, i) => (
            <tr key={i}>
              {columns?.map((column, y) => (
                <td key={y}>
                  {column?.render ? render(record) : record[column?.key]}
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
              {column?.generateTotal ? generateColumnTotal(column?.key) : column?.footer || "-"}
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

TableComp.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  onView: PropTypes.func,
  className: PropTypes.string,
};