import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
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
        <Route path="/blog/:id" element={<BlogHotloh />} />
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
              Published blog
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
  const { id } = useParams();
  const [article, setArticle] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000/articles/${id}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setArticle(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);

  if (!article) return <div>Loading...</div>;
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
      <div className="container" style={{ maxWidth: 700 }}>
        {/* {category && <span>{category.name}</span>} */}
        <span className="badge rounded-pill text-bg-primary">
          {article.nemelt?.name}{" "}
          {/* {category && <span>{category.name}</span>} /энэ бичэглэл span гарч ирэхгүй бас категори утга нь байхгүй байвал алдаа заана/ == үүнтэй адилхан боловч span таг гарч ирнэ, бас хэрвээ category утга нь байхгүй буюу null байвал зүгээр null аараа гарч ирнэ. Ө.х алдаа заахгүй. */}
        </span>
        <h1>{article.title} </h1>
        <div>{parse(article.text)}</div>
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
