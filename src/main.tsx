import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
