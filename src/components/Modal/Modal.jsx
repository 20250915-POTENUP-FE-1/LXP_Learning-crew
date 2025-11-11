import ModalButton from "../ModalButton";
import ModalCard from "./components/ModalCard";
import ModalContent from "./components/ModalContent";
import ModalList from "./components/ModalList";

const Modal = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex max-h-[90vh] w-[895px] flex-col rounded-3xl bg-white p-8 shadow-2xl">
        <ModalButton type="button" variant="modal">
          X
        </ModalButton>
        <div className="flex-1 overflow-y-auto pr-2">
          <ModalContent />
          <ModalCard />
          <ModalList />
        </div>

        <div className="mt-4 flex justify-end pt-4">
          <ModalButton type="button" variant="modalEdit">
            수정하기
          </ModalButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
