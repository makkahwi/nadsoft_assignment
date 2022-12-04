import { Link, useLocation } from 'react-router-dom';
import Container from '../../Components/Base/Grid/Container';
import Nav from '../../Components/Base/Nav';
import Navbar from '../../Components/Base/Nav/Navbar';
import NavbarBrand from '../../Components/Base/Nav/NavbarBrand';
import NavbarToggle from '../../Components/Base/Nav/NavbarToggle';
import NavbarCollapse from '../../Components/Base/Nav/NavbarCollapse';
import routes from "../../Routes";

export default function Header() {
  const location = useLocation();

  const isCurrent = route => route.path === location.pathname;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavbarBrand className="my-2">
          Covid Statistics
        </NavbarBrand>

        <NavbarToggle aria-controls="basic-navbar-nav" />

        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes?.filter(route => !route.hideInNavbar)?.map((route, i) => (
              <Link key={i} to={route.path} className={`text-decoration-none m-3 ${isCurrent(route) ? "text-white text-underline" : "text-secondary"}`}>
                {route.name}
              </Link>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}