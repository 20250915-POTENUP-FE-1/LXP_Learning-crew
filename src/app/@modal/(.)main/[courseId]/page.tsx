import CourseDetailPage from "@/app/main/[courseId]/page";
import { ActionButton } from "@/shared/components/ActionButton";
import Modal from "@/shared/components/Modal/Modal";

interface ModalPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

const CourseDetailModal = async ({ params }: ModalPageProps) => {
  return (
    <Modal>
      <CourseDetailPage params={params} />
    </Modal>
  );
};

export default CourseDetailModal;
