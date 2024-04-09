import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
