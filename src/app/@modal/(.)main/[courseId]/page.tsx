import CourseDetailPage from "@/app/main/[courseId]/page";
import Modal from "@/shared/components/Modal/Modal";

import React from "react";

const ModalPage = () => {
  return (
    <Modal>
      <CourseDetailPage />
    </Modal>
  );
};

export default ModalPage;
