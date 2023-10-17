import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Details from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { ContextProvider } from "./Components/utils/global.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "contacto",
        element: <Contact/>,

      },
      {
        path: "favoritos",
        element: <Favs/>,

      },
      {
        path: "detalles/:id",
        element: <Details/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
);
