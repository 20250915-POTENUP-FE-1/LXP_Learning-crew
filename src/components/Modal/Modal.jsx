import ModalCourseStats from "./components/ModalCourseStats";
import ModalHeaderContent from "./components/ModalHeaderContent";
import ModalCurriculumList from "./components/ModalCurriculumList";
import Button from "../Button";

const Modal = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex max-h-[90vh] w-[895px] flex-col rounded-3xl bg-white p-8 shadow-2xl">
        <Button type="button" variant="closer">
          X
        </Button>
        <div className="flex-1 overflow-y-auto pr-2">
          <ModalHeaderContent />
          <ModalCourseStats />
          <ModalCurriculumList />
        </div>

        <div className="mt-4 flex justify-end pt-4 pr-8">
          <Button type="button" variant="edit">
            수정하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
