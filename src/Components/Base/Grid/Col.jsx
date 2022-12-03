import Col from 'react-bootstrap/Col';

export default function ColComp({ children, ...props }) {
  return (
    <Col {...props}>
      {children}
    </Col>
  );
}