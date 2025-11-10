import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Main from "./main/Main";
import Register from "./register/Register";
import { Route, Routes } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* 1. Header 삽입 */}
      <Header />

      <main className="w-full max-w-7xl grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
