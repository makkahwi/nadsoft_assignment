import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export default function NavbarCollapseComp({ children, ...props }) {
  return (
    <NavbarCollapse {...props}>
      {children}
    </NavbarCollapse>
  );
}