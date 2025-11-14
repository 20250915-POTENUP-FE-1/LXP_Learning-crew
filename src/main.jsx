import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/globals.css";
import "./styles/fonts.css";

import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import store from "./store/store";

import ModalProvider from "./components/Modal/components/ModalProvider";

const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </BrowserRouter>
  </Provider>,
  // </StrictMode>,
);
