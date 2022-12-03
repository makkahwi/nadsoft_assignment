import Row from 'react-bootstrap/Row';

export default function RowComp({ children, ...props }) {
  return (
    <Row {...props}>
      {children}
    </Row>
  );
}