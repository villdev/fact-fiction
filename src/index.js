import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "./context/AuthProvider";
import { DataProvider } from "./context/DataProvider";
import App from "./App";

const rootEl = document.getElementById("root");

render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  rootEl
);
