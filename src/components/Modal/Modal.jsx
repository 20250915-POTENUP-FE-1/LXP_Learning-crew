import { AnimatePresence, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import CloseButton from "./components/CloseButton";
import { useEffect } from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import overlayAnimation from "./animation/overlay";
import modalAnimation from "./animation/modal";

const Modal = ({ content, onHide, bottomContainer }) => {
  const isShow = useSelector((state) => state.modal.isModalShow);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShow]);

  return (
    <AnimatePresence>
      {isShow && (
        <div className="fixed h-full w-full">
          {/* 배경 오버레이 */}
          <motion.div
            style={overlayAnimation.style}
            initial={overlayAnimation.initial}
            animate={overlayAnimation.animate}
            exit={overlayAnimation.exit}
            transition={overlayAnimation.transition}
            onClick={onHide}
          />

          {/* 모달 컨텐츠 */}
          <motion.div
            className="flex flex-col"
            style={modalAnimation.style}
            initial={modalAnimation.initial}
            animate={modalAnimation.animate}
            exit={modalAnimation.exit}
            transition={modalAnimation.transition}
          >
            <CloseButton onClick={onHide} />

            <div className="flex h-full w-full flex-col overflow-scroll scroll-auto p-4 px-9 pt-12">
              {content}
            </div>

            {bottomContainer && (
              <div className="flex justify-end gap-2 px-9 pt-2 pb-6">
                {bottomContainer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
