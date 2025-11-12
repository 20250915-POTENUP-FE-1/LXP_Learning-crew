import React from "react";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import Modal from "../components/Modal/Modal";
import LectureDetail from "../components/Modal/contents/LectureDetail";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../store/modal/modalReducer";

const Layout = () => {
  const dispatch = useDispatch();

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

      <Modal
        onHide={() => dispatch(hideModal())}
        onShow={() => dispatch(showModal())}
      >
        <LectureDetail />
      </Modal>
    </div>
  );
};

export default Layout;
