import React, { useContext } from "react";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import MyPage from "./my/MyPage";
import My from "./my/sections/My";
import Profile from "./my/sections/Profile";
import { useDispatch } from "react-redux";

// import CodeGenerate from "./my/sections/CodeGenerate";

import Modal from "../components/Modal/Modal";
import { ModalContext } from "../components/Modal/components/ModalProvider";

const Layout = () => {
  // const modalContent = useSelector((state) => state.modal.modalContent.content);
  // const bottomContainer = useSelector(
  //   (state) => state.modal.modalContent.bottomContainer,
  // );
  const { modalContent, bottomContainer, hideModal } = useContext(ModalContext);
  // const modalContent = useSelector((state) => state.modal.modalContent.content);
  // const bottomContainer = useSelector(
  //   (state) => state.modal.modalContent.bottomContainer,
  // );
  const dispatch = useDispatch();
  const GNB_HEIGHT_CLASS = "pt-16";

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-y-scroll">
      <div className="fixed top-0 flex w-full max-w-[1100px] flex-col">
        <Header />
      </div>

      {/* 2. Main Content 영역  */}
      <main className={`w-full max-w-[1100px] grow pt-16`}>
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
      </main>

      {/* 3. Footer 영역 (오류 수정: 닫는 꺾쇠괄호 > 추가) */}
      <div className="w-full max-w-[1100px] shrink-0">
        <Footer />
      </div>

      <Modal
        onHide={() => hideModal()}
        content={modalContent}
        bottomContainer={bottomContainer}
      />
    </div>
  );
};

export default Layout;
