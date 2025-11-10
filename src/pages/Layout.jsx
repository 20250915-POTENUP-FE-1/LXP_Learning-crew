import React from "react";
import Login from "./login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Layout;
