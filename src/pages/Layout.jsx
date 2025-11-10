import React from "react";
import Login from "./login/Login";
import { Route, Routes } from "react-router-dom";

import Modal from "../components/Modal/Modal";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Modal />} />
      </Routes>
    </div>
  );
};

export default Layout;
