// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CollapsibleExample from "./navbar";
import BodyComp from "./card";
import HeadPart from "./headPart";
import CategoriesEdit from "./categEdit";

function App() {
  return (
    // <div className="Container1">
    //   <CollapsibleExample />
    //   <body className="d-flex flex-column gap-4 justify-content-center align-items-center">
    //     <HeadPart />
    //     <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
    //       <BodyComp />
    //       <BodyComp />
    //       <BodyComp />
    //     </div>
    //   </body>
    // </div>
    <CategoriesEdit />
  );
  // return <Demo />;
}

export default App;
