import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
// import { CategoriesList } from "./CategoriesList";
import axios from "axios";
import { CategoriesList } from "./CategoriesList";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
export function Categor() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text, SetText] = useState("");
  // const [list, addList] = useState({});
  // const [sText, setSText] = useState("");
  const [initialList, setList] = useState([]);
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [query, setQuery] = useState("");
  const [list, setListQ] = useState([]);
  const [searchedQuery] = useDebounce(query, 1000);
  const editing = searchParams.get("editing");
  // const InpVal = "";

  function getValue(e) {
    const InpVal = e.target.value;
    setName(InpVal);
  }
  function GetData() {
    axios.get("http://localhost:8000/categories").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        // console.log(data.map(item));
        setList(data);
        console.log(data, status);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }
  useEffect(() => {
    GetData();
  }, []);

  function loadCategory(query = "") {
    axios.get(`http://localhost:8000/categories?query=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setListQ(data);
      } else {
        alert(`Aldaa garllaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadCategory(searchedQuery);
  }, [searchedQuery]);
  useEffect(() => {
    if (editing) {
      setShow(true);
      if (editing !== "new") {
        axios.get(`http://localhost:8000/categories/${editing}`).then((res) => {
          const { data, status } = res;
          if (status === 200) {
            setName(data.name);
          } else {
            alert(`aldaa garlaa: ${status}`);
          }
        });
      }
    }
  }, [editing]);

  function handleSave() {
    if (editing === "new") {
      axios
        .post("http://localhost:8000/categories", {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            OnComplete();
            onClose();
            setName("");
          }
        });
    } else {
      axios
        .put(`http://localhost:8000/categories/${editing}`, {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            OnComplete();
            onClose();
            setName("");
          }
        });
    }

    setShow(false);
  }

  // function SecondValue(e) {
  //   const InpVal = e.target.value;
  //   setSText(InpVal);
  // }
  // function Saving() {
  //   if (text === "") {
  //     SetText("utgaa oruulna uu");
  //   } else {
  //     // alert(text);
  //     // const listCard = {
  //     //   id: uuidv4(),
  //     //   name: text,
  //     // };
  //     // const listCards = [listCard, ...initialList];
  //     // setList(listCards);
  //     // console.log(listCards);
  //     // SetText("");
  //     handleClose();
  //   }
  // }
  function OnComplete() {
    GetData();
  }
  function onClose() {
    setSearchParams({});
  }
  // const editing = searchParams.get("editing") === "new";

  function Saving() {
    axios
      .post("http://localhost:8000/categories", {
        name: name,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          OnComplete();
          onClose();
          setName("");
          handleClose();
        }
      });
  }
  // function UploadImages() {
  //   const [image, setImage] = useState("");
  //   function handleImage(e) {
  //     // console.log(e.target.files);
  //     setImage(e.target.files[0]);
  //   }
  //   return (
  //     <div>
  //       <input type="file" name="file" onChange={handleImage} />
  //       {/* <button onClick={handleApi}>Submit</button> */}
  //     </div>
  //   );
  // }

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ width: "600px" }}
      >
        <h1>Ангилал</h1>
        {/* <button className="btn btn-success" onClick={handleShow} >
          Шинэ
        </button> */}
        <button
          className="btn btn-success"
          onClick={() => setSearchParams({ editing: "new" })}
        >
          Шинэ
        </button>
      </div>
      <input
        placeholder="Search"
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />{" "}
      <button>Хайх </button>
      <CategoriesList
        Jagsaalt={initialList}
        setlist={setList}
        SetText={SetText}
        Getdata={GetData}
        editingID={editing}
        Savingfunc={Saving}
        OnComplete={OnComplete}
        onClose={onClose}
        list={list}
        searchedQuery={searchedQuery}
        onChange={loadCategory}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column gap-3">
          <div>
            <p>Ангилалын нэр:</p>
            <input onChange={getValue} value={name} style={{ width: "100%" }} />
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
          <Button variant="primary" onClick={handleSave}>
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
