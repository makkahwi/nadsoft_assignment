import Nav from 'react-bootstrap/Nav';

export default function NavComp({ children, ...props }) {
  return (
    <Nav {...props}>
      {children}
    </Nav>
  );
}