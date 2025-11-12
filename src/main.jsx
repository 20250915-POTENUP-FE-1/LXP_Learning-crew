import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/globals.css";
import "./styles/fonts.css";

import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import store from "./store/store";

import MyPageLayout from "./pages/my/MyPage";
import MyPageMain from "./pages/my/MyPageMain";
import MypageProfile from "./pages/my/MypageProfile";
import MypageCode from "./pages/my/MypageCode";

const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  // </StrictMode>,
);
