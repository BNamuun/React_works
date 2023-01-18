// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AdminPart } from "./admin/adminPart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Blog />,
//   },
//   {
//     path: "/hi",
//     element: <div>Hi world!</div>,
//   },
//   {
//     path: "blog",
//     element: <div>Hello world!</div>,
//   },
// ]);
function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPart />} />
      </Routes>
    </BrowserRouter>
  );
}
// function Blog() {
//   return (
//     <>
//       <CollapsibleExample />
//       <div
//         className="container d-flex flex-column justify-content-center align-item-center gap-4"
//         style={{ width: "600px", height: "50vh" }}
//       >
//         <Categor />
//         <br />
//         {/* <a href="/about"> About Namuun</a> */}
//       </div>
//     </>
//   );
// }

export default App;
