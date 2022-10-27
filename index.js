import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages";
ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById("root")
);
