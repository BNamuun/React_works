import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export function CategoriesList({ Huslee, setlist }) {
  const [editingText, savingIndex] = useState();

  function editInput(index) {
    const listCards = [...Huslee];
    console.log(listCards[index].text);
    savingIndex(index);
  }
  function DeleteBtn(index) {
    if (window.confirm("Delete this item!")) {
      const ListCards = [...Huslee];
      ListCards.splice(index, 1);
      setlist(ListCards);
    }
  }
  return (
    <>
      {/* <ul> */}
      {Huslee.map((angilal, index) => {
        return (
          // <li style={{ textDecoration: "none" }}>
          <ListItem
            key={angilal.id}
            category={angilal}
            Editbtn={() => editInput(index)}
            DeleteBtn={() => DeleteBtn(index)}
          />
          // </li>
        );
      })}
      {/* </ul> */}
    </>
  );
}

function ListItem({ category, Editbtn, DeleteBtn }) {
  return (
    <Card
      key={category.id}
      className="d-flex justify-content-between align-items-center flex-row"
      style={{ width: "600px" }}
    >
      <Card.Body>{category.text} </Card.Body>
      <div>
        <Button onClick={Editbtn} className="m-3" variant="dark">
          Засах
        </Button>
        <Button className="m-3" variant="warning" onClick={DeleteBtn}>
          Устгах
        </Button>
      </div>
    </Card>
  );
}
