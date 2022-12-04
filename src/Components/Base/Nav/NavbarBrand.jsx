import NavbarBrand from 'react-bootstrap/NavbarBrand';

export default function NavbarBrandComp({ children, ...props }) {
  return (
    <NavbarBrand {...props}>
      {children}
    </NavbarBrand>
  );
}