// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AdminPart } from "./admin/adminPart";
import { ClientBlog } from "./client/client";
import { Tetris } from "./js/Tetris";
import { AddNews } from "./admin/addNews";
import { Categor } from "./Categ";
import { ArticleNew } from "./admin/ArticlesNew";
import { useContext, createContext } from "react";
import { Articles } from "./admin/Article";

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
export const Namuun = createContext("DefaultZochin");
function Greeting() {
  return (
    <div>
      <strong>Hello </strong>
    </div>
  );
}
function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      {/* <Categor /> */}
      {/* <NavbarTop /> */}
      <Routes>
        <Route path="/admin/*" element={<AdminPart />} />
        <Route path="/admin/addNews/*" element={<AddNews />}></Route>
        <Route path="/admin/articles/new" element={<Articles />}></Route>

        <Route
          path="/admin/categories/addNews"
          element={
            <Namuun.Provider
              value={{ greeting: <Greeting />, name: "Gerelee" }}
            >
              <ArticleNew />
            </Namuun.Provider>
          }
        ></Route>
        <Route path="*" element={<ClientBlog />} />
        <Route path="/tetris/*" element={<Tetris />}>
          <Route
            path="first"
            element={
              <div>
                <h1>First Part </h1>
              </div>
            }
          />

          <Route
            path="second"
            element={
              <div>
                {" "}
                <h1> Second Part</h1>
              </div>
            }
          />
          <Route />
        </Route>
        {/* <Route path="order" element={<Order />} /> */}
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
