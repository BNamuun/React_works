import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CategoriesList({ Huslee, index }) {
  return (
    <>
      {Huslee.map((angilal, index) => (
        <ListItem category={angilal} />
      ))}
    </>
  );
}

function ListItem({ category }) {
  return (
    <Card
      key={category.id}
      className="d-flex justify-content-between align-items-center flex-row"
      style={{ width: "600px" }}
    >
      <Card.Body>{category.text} </Card.Body>
      <Button className="m-3" variant="dark">
        Засах
      </Button>
    </Card>
  );
}
