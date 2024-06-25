import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Páginas
import Inicio from "./Pages/Inicio/Inicio.jsx";
import Sobre from "./Pages/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
