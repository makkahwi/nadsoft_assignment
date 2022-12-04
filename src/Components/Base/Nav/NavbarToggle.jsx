import NavbarToggle from 'react-bootstrap/NavbarToggle';

export default function NavbarToggleComp({ children, ...props }) {
  return (
    <NavbarToggle {...props}>
      {children}
    </NavbarToggle>
  );
}