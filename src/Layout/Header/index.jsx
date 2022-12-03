import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../Components/Base/Grid/Container';
import Nav from '../../Components/Base/Nav';
import routes from "../../Routes";

export default function Header() {
  const location = useLocation();

  const isCurrent = route => route.path === location.pathname;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="my-2">
          Covid Statistics
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes?.filter(route => !route.hideInNavbar)?.map((route, i) => (
              <Link key={i} to={route.path} className={`text-decoration-none m-3 ${isCurrent(route) ? "text-white text-underline" : "text-secondary"}`}>
                {route.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}