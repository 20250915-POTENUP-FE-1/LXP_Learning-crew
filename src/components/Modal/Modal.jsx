import ModalCard from "./components/ModalCard";
import ModalFrame from "./components/ModalFrame";

const Modal = () => {
  return (
    <div className="flex h-[1840px] w-[1200px] items-center justify-center">
      <div className="relative h-[1468px] w-[880px] items-center justify-center rounded-lg bg-white p-8 shadow-2xl">
        <ModalFrame />
        <ModalCard />
      </div>
    </div>
  );
};

export default Modal;
