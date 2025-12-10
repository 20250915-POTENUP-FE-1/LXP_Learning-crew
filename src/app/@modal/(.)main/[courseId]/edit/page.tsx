import CourseEditPage from "@/app/main/[courseId]/edit/page";
import Modal from "@/shared/components/Modal/Modal";
import React from "react";

interface CourseEditModalProps {
  params: Promise<{
    courseId: string;
  }>;
}

const CourseEditModal = async ({ params }: CourseEditModalProps) => {
  const { courseId } = await params;

  return (
    <Modal>
      <CourseEditPage courseId={courseId} />
    </Modal>
  );
};

export default CourseEditModal;
