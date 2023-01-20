import { Categor } from "../Categ";
import NavbarTop from "../navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Todos from "../todos";

export function AdminPart() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarPart />} />
        <Route path="/categories" element={<NavbarPart />} />
        <Route path="/todos" element={<TodoPart />} />
      </Routes>
      <div className="d-flex gap-3 mt-4 flex-column container justify-content-center align-items-center ">
        <Routes>
          <Route path="/" element={<div> Admin part</div>} />
          <Route path="/categories" element={<AdminNavbar />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
      <Outlet />
    </>
  );
}

function AdminNavbar() {
  return (
    <>
      <Categor />
      <br />
      {/* <a href="/about"> About Namuun</a> */}
    </>
  );
}
function NavbarPart() {
  return (
    <>
      <NavbarTop />
    </>
  );
}
function TodoPart() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Админ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/admin" as={NavLink}>
              Хэрэглэгч
            </Nav.Link>
            <Nav.Link to="/admin/categories" as={NavLink}>
              Ангилал
            </Nav.Link>
            <Nav.Link to="/admin/todos" as={NavLink}>
              Todo
            </Nav.Link>
            <Nav.Link to="/" as={NavLink}>
              ClientPart
            </Nav.Link>
            <Nav.Link to="/admin/categories">Create categories</Nav.Link>
            <Nav.Link to="/admin/todos">Бүртгүүлэх</Nav.Link>
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
