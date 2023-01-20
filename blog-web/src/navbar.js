import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
function NavbarTop() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Админ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "teal" : "none",
              })}
              to="/admin/categories"
              as={NavLink}
            >
              Ангилал
            </Nav.Link>

            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "teal" : "none",
              })}
              to="/admin/todos"
              as={NavLink}
            >
              {" "}
              Todo
            </Nav.Link>
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "teal" : "none",
              })}
              to="/"
              as={NavLink}
            >
              {" "}
              Client Part
            </Nav.Link>
            <NavDropdown title="Мэдээ" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Мэдээ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="light">Гарах</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
