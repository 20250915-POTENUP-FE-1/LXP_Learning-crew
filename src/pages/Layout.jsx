import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Main from "./main/Main";
import Register from "./register/Register";
import { Route, Routes } from "react-router-dom";
import MyPage from "./my/MyPage";
import My from "./my/sections/My";
import Profile from "./my/sections/Profile";
import CodeGenerate from "./my/sections/CodeGenerate";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* 1. Header 삽입 */}
      <Header />

      <main className="w-full max-w-7xl grow">
        <Routes>
          <Route index element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my" element={<MyPage />}>
            <Route index element={<My />} />
            <Route path="profile" element={<Profile />} />
            <Route path="code" element={<CodeGenerate />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
