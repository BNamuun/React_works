import { Categor } from "../Categ";
import CollapsibleExample from "../navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, Route, Routes } from "react-router-dom";

export function AdminPart() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminNavbar />} />
        <Route path="/categories" element={<AdminNavbar />} />
        <Route path="/todos" element={<TodoPart />} />
      </Routes>
      <Routes>
        <Route path="/" element={<div> Admin part</div>} />
        <Route path="/categories" element={<div> categories</div>} />
        <Route path="/todos" element={<div> todo </div>} />
      </Routes>
    </>
  );
}

function AdminNavbar() {
  return (
    <>
      <CollapsibleExample />
      <div
        className="container d-flex flex-column justify-content-center align-item-center gap-4"
        style={{ width: "600px", height: "50vh" }}
      >
        <Categor />
        <br />
        {/* <a href="/about"> About Namuun</a> */}
      </div>
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
            <Nav.Link to="/admin" as={Link}>
              Хэрэглэгч
            </Nav.Link>
            <Nav.Link to="/admin/categories">Ангилал</Nav.Link>
            <Nav.Link to="/admin/todos">Бүртгүүлэх</Nav.Link>
            <Nav.Link to="/admin/categories">Create categories</Nav.Link>
            <Nav.Link to="/admin/todos">Todo</Nav.Link>
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
