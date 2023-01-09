import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function BodyComp() {
  return (
    <Card
      className="d-flex justify-content-between align-items-center flex-row"
      style={{ width: "500px" }}
    >
      <Card.Body>Улс төр</Card.Body>
      <Button className="m-3" variant="dark">
        Засах
      </Button>
    </Card>
  );
}

export default BodyComp;
