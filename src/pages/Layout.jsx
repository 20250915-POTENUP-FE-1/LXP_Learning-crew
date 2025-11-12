import React from "react";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import MyPage from "./my/MyPage";
import My from "./my/sections/My";
import Profile from "./my/sections/Profile";
// import CodeGenerate from "./my/sections/CodeGenerate";
import Modal from "../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../store/modal/modalReducer";

const Layout = () => {
  const modalContent = useSelector((state) => state.modal.modalContent.content);
  const bottomContainer = useSelector(
    (state) => state.modal.modalContent.bottomContainer,
  );
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1100px] flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my" element={<MyPage />}>
            <Route index element={<My />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="code" element={<CodeGenerate />} /> */}
          </Route>
        </Routes>
        <Footer />
      </div>

      <Modal
        onHide={() => dispatch(hideModal())}
        content={modalContent}
        bottomContainer={bottomContainer}
      />
    </div>
  );
};

export default Layout;
