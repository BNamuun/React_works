import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import categories from "./categories";

export function CategoriesList() {
  return (
    <>
      {categories.map((angilal) => (
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
      style={{ width: "500px" }}
    >
      <Card.Body>
        {category.name} #{category.id}{" "}
      </Card.Body>
      <Button className="m-3" variant="dark">
        Засах
      </Button>
    </Card>
  );
}
