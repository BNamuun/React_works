import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
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
}) {
  const [editingText, savingIndex] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({});
  const [name, setName] = useState("");
  function handleDelete(id) {
    if (window.confirm("Delete")) {
      // console.log(Jagsaalt.id);
      axios.delete(`http://localhost:8000/categories/${id}`).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          Getdata();
          console.log({ data, status });
        }
      });
    }
  }
  function editInput(id, index) {
    const listCards = [...Jagsaalt];
    listCards[id] = Jagsaalt[index].text;
    savingIndex(listCards);
  }
  function handleEditingText(id, e) {
    const listCard = { ...editingText };
    listCard[id] = e.target.value;
    savingIndex(listCard);
  }
  function DeleteBtn(index) {
    if (window.confirm("Delete this item!")) {
      const ListCards = [...Jagsaalt];
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
    const ListCards = [...Jagsaalt];
    ListCards[index].text = editingText[id];
    setlist(ListCards);
    Cancelbtn(id);
  }
  function handleSave() {
    if ((editingID = "new")) {
      Savingfunc();
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
  const navigate = useNavigate();
  return (
    <>
      {Jagsaalt.map((angilal, index) => {
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
                    // onClick={() => setSearchParams({ editingID: angilal.id })}

                    onClick={handleSave}
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
