import Container from 'react-bootstrap/Container';

export default function ContainerComp({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}