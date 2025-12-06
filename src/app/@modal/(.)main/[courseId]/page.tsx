import CourseDetailPage from "@/app/main/[courseId]/page";
import Modal from "@/shared/components/Modal/Modal";

interface ModalPageProps {
  params: {
    courseId: string;
  };
}

const ModalPage = async ({ params }: ModalPageProps) => {
  return (
    <Modal>
      <CourseDetailPage params={await params} />
    </Modal>
  );
};

export default ModalPage;
