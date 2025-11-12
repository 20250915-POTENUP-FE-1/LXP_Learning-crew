import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/globals.css";
import "./styles/fonts.css";

import Main from "./pages/main/Main";
import Layout from "./pages/Layout";

import MyPageLayout from "./pages/my/MyPage";
import MyPageMain from "./pages/my/MyPageMain";
import MypageProfile from "./pages/my/MypageProfile";
import MypageCode from "./pages/my/MypageCode";

const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>,
);
