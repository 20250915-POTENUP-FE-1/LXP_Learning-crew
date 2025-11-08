import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";


const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* 1. Header 삽입 */}
      <Header />

      <main className="w-full max-w-7xl flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
