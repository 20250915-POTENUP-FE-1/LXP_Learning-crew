import React from "react";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1100px] flex-col">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
