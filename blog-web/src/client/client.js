import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
export function ClientBlog() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientOrder />} />
        <Route path="/blog" element={<ClientOrder />} />
        <Route path="/SignIn" element={<ClientOrder />} />
        <Route path="/edit" element={<ClientOrder />} />
        {/* <Route path="/" element={<Navbar />} /> */}
      </Routes>
      <Routes>
        <Route path="/" element={<div>Welcome to Client Part</div>} />
        <Route path="/blog" element={<BlogHotloh />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/edit" element={<EditPart />} />
      </Routes>
    </>
  );
}

function ClientOrder() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ClientPart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/SignIn" as={Link}>
              Бүртгүүлэх
            </Nav.Link>
            <Nav.Link to="/blog" as={Link}>
              Блог хөтлөх
            </Nav.Link>
            <Nav.Link to="/edit" as={Link}>
              Edit
            </Nav.Link>
            <Nav.Link to="#" as={Link}>
              Найзуудын блог
            </Nav.Link>
            <Nav.Link to="#">Нийтлэлүүд</Nav.Link>
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
function BlogHotloh() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Blog hotloh heseg</h1>
        <AwesomeButton onPress={() => navigate("/SignIn")} type="primary">
          Registarion Form
        </AwesomeButton>
        <AwesomeButton onPress={() => navigate(-1)} type="Secondary">
          Just back
        </AwesomeButton>
        <AwesomeButton
          onPress={() => navigate("/admin/categories", { replace: true })}
          type="Danger"
        >
          replace Btn
        </AwesomeButton>
        {/* <button onClick={() => navigate("/SignIn")}> Registarion Form</button> */}
      </div>
    </>
  );
}
function SignIn() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
// function EditPart() {
//   return (
//     <>

//     </>
//   );
// }

export function EditPart() {
  const [text, setText] = useState();

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />

      {/* <div>{text}</div> */}

      {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
    </>
  );
}
