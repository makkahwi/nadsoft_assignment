import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp({ children, ...props }) {
  return (
    <Navbar {...props}>
      {children}
    </Navbar>
  );
}