import React from "react";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "./login/Login";
import Register from "./register/Register";

const Layout = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1100px] flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
