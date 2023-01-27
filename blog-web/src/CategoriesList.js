import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CategoriesList({ Jagsaalt, setlist }) {
  const [editingText, savingIndex] = useState({});

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
                    onClick={() => editInput(angilal.id, index)}
                  >
                    Засах
                  </Button>
                  <Button
                    className="m-3"
                    variant="warning"
                    onClick={() => DeleteBtn(index)}
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
