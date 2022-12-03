import Table from 'react-bootstrap/Table';

export default function TableComp({ children, ...props }) {
  return (
    <Table {...props}>
      {children}
    </Table>
  );
}