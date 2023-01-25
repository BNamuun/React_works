import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
// import { CategoriesList } from "./CategoriesList";
import axios from "axios";
export function Categor() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text, SetText] = useState("");
  // const [list, addList] = useState({});
  const [sText, setSText] = useState("");
  const [initialList, setList] = useState([]);

  // const InpVal = "";

  function getValue(e) {
    const InpVal = e.target.value;
    SetText(InpVal);
  }
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        // console.log(data.map(item));
        data.map((dat) =>
          // cosnt DateVal =  DateTime.push((item)[0])

          console.log(dat.text)
        );
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);

  function SecondValue(e) {
    const InpVal = e.target.value;
    setSText(InpVal);
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
  function UploadImages() {
    const [image, setImage] = useState("");
    function handleImage(e) {
      // console.log(e.target.files);
      setImage(e.target.files[0]);
    }
    return (
      <div>
        <input type="file" name="file" onChange={handleImage} />
        {/* <button onClick={handleApi}>Submit</button> */}
      </div>
    );
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
      {/* <CategoriesList
        Jagsaalt={initialList}
        setlist={setList}
        SetText={SetText}
      /> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column gap-3">
          <div>
            <p>Ангилалын нэр:</p>
            <input onChange={getValue} value={text} style={{ width: "100%" }} />
          </div>
          {/* <div> */}
          {/* <p>Мэдээ:</p>
            <input
              onChange={SecondValue}
              value={sText}
              style={{ width: "100%" }}
            />
          </div>
          <div className="d-flex flex-column">
            <p>Зураг: </p>
            <input type="file" name="file" onChange={UploadImages} />
          </div> */}
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
