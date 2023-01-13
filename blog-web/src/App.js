// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./navbar";

import { Categor } from "./Categ";

function App() {
  return (
    <>
      <CollapsibleExample />
      <div
        className="container d-flex flex-column justify-content-center align-item-center gap-4"
        style={{ width: "600px", height: "50vh" }}
      >
        <Categor />
      </div>
    </>
  );
  // return <Demo />;
}

export default App;
