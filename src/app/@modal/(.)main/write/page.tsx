import CourseWritePage from "@/app/main/write/page";
import Modal from "@/shared/components/Modal/Modal";
import React from "react";

interface CourseWriteModalProps {}

const CourseWriteModal = () => {
  return (
    <Modal>
      <CourseWritePage />
    </Modal>
  );
};

export default CourseWriteModal;
