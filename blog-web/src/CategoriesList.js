import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CategoriesList({ Huslee, Editbtn }) {
  return (
    <>
      {Huslee.map((angilal, index) => (
        <ListItem category={angilal} Editbtn={Editbtn} />
      ))}
    </>
  );
}

function ListItem({ category, Editbtn }) {
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
        <Button className="m-3" variant="warning">
          Устгах
        </Button>
      </div>
    </Card>
  );
}
