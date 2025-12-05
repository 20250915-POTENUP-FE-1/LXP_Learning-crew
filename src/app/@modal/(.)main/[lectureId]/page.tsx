import LectureDetailPage from "@/app/main/[lectureId]/page";
import Modal from "@/shared/components/Modal/Modal";

import React from "react";

const ModalPage = () => {
  return (
    <Modal>
      <LectureDetailPage />
    </Modal>
  );
};

export default ModalPage;
