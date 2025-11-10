import React from "react";
import Login from "./login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./signup/register";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Layout;
