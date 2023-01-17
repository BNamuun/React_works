import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import { CategoriesList } from "./CategoriesList";

export function Categor() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text, SetText] = useState("");
  // const [list, addList] = useState({});
  const [initialList, setList] = useState([]);

  // const InpVal = "";

  function getValue(e) {
    const InpVal = e.target.value;
    SetText(InpVal);
  }
  function Saving() {
    if (text === "") {
      SetText("utgaa oruulna uu");
    } else {
      // alert(text);
      const listCard = {
        text: text,
        id: uuidv4(),
      };
      const listCards = [listCard, ...initialList];
      setList(listCards);
      console.log(listCards);
      SetText("");
      handleClose();
    }
  }
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ width: "600px" }}
      >
        <h1>Ангилал</h1>
        <button className="btn btn-success" onClick={handleShow}>
          Шинэ
        </button>
      </div>
      <CategoriesList
        Jagsaalt={initialList}
        setlist={setList}
        SetText={SetText}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Нэр</p>
          <input onChange={getValue} value={text} style={{ width: "100%" }} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={Saving}>
            Хадгалах
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Хаах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
