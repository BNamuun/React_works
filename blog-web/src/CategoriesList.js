import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export function CategoriesList({
  Jagsaalt,
  setlist,
  Getdata,
  editingID,
  Savingfunc,
  onComplete,
  onClose,
  list,
<<<<<<< HEAD
  onChange,
=======
>>>>>>> b1259c3dced243ba94949ce13851e015cae4b50b
  searchedQuery,
}) {
  const [editingText, savingIndex] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({});
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleDelete(id) {
    if (window.confirm("Delete")) {
      // console.log(list.id);
      axios.delete(`http://localhost:8000/categories/${id}`).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          onChange();
          console.log({ data, status });
        }
      });
    }
  }
  if (list.length === 0) {
    return <h1> Ийм үр дүн олдсонгүй</h1>;
  }
  function editInput(id, index) {
    const listCards = [...list];
    listCards[id] = list[index].text;
    savingIndex(listCards);
  }
  function handleEditingText(id, e) {
    const listCard = { ...editingText };
    listCard[id] = e.target.value;
    savingIndex(listCard);
  }
  function DeleteBtn(index) {
    if (window.confirm("Delete this item!")) {
      const ListCards = [...list];
      ListCards.splice(index, 1);
      setlist(ListCards);
    }
  }
  function Cancelbtn(id) {
    const listCard = { ...editingText };
    listCard[id] = undefined;
    savingIndex(listCard);
  }
  function SaveEditedText(index, id) {
    const ListCards = [...list];
    ListCards[index].text = editingText[id];
    setlist(ListCards);
    Cancelbtn(id);
  }

  function handleSave() {
    if (editingID === "new") {
      axios
        .post("http://localhost:8000/categories", {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            onComplete();
            onClose();
            setName("");
          }
        });
    } else {
      axios
        .put(`http://localhost:8000/categories/${editingID}`, {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            onComplete();
            onClose();
            setName("");
          }
        });
    }
  }

  return (
    <>
      {list.map((angilal, index) => {
        return (
          <Card
            key={angilal.id}
            className="d-flex justify-content-between align-items-center flex-row"
            style={{ width: "800px" }}
          >
            {editingText[angilal.id] !== undefined ? (
              <>
                <Card.Body>
                  {" "}
                  <input
                    style={{
                      border: "2px solid red",
                      width: "80%",
                      padding: "7px 2px",
                    }}
                    value={editingText[angilal.id]}
                    onChange={(e) => handleEditingText(angilal.id, e)}
                  />{" "}
                </Card.Body>
                <div>
                  <Button
                    className="m-3"
                    variant="dark"
                    onClick={() => Cancelbtn(angilal.id)}
                  >
                    Болих
                  </Button>
                  <Button
                    className="m-3"
                    variant="warning"
                    onClick={() => SaveEditedText(index, angilal.id)}
                  >
                    Хадгалах
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Card.Body>{angilal.name} </Card.Body>
                <div>
                  <Button
                    className="m-3"
                    variant="dark"
                    // onClick={() => editInput(angilal.id, index)}
                    onClick={() => setSearchParams({ editing: angilal.id })}

                    // onClick={() => handleSave(angilal.id)}
                  >
                    Засах
                  </Button>
                  <Button
                    className="m-3"
                    variant="warning"
                    // onClick={() => DeleteBtn(index)}
                    onClick={() => handleDelete(angilal.id)}
                  >
                    Устгах
                  </Button>
                  <Button
                    className="m-3"
                    variant="primary"
                    onClick={() => navigate("/admin/addNews/")}
                    type="primary"
                  >
                    Мэдээлэл нэмэх
                  </Button>
                </div>
              </>
            )}
          </Card>
        );
      })}
    </>
  );
}

// function ListItem({ category, Editbtn, DeleteBtn }) {
//   return (
//     <Card
//       key={category.id}
//       className="d-flex justify-content-between align-items-center flex-row"
//       style={{ width: "600px" }}
//     >
//       <Card.Body>{category.text} </Card.Body>
//       <div>
//         <Button className="m-3" variant="dark" onClick={Editbtn}>
//           Засах
//         </Button>
//         <Button className="m-3" variant="warning" onClick={DeleteBtn}>
//           Устгах
//         </Button>
//       </div>
//     </Card>
//   );
// }
