import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MyBarProvider from "./provider/MyBarProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyBarProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyBarProvider>
);
