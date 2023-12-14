import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
// import reportWebVitals from "./reportWebVitals";
import FoodBox from "./components/FoodBox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FoodBox></FoodBox>
  </React.StrictMode>
);


reportWebVitals();