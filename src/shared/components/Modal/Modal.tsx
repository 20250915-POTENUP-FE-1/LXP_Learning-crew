"use client";

import { AnimatePresence, motion } from "motion/react";
import overlayAnimation from "./animation/overlay";
import modalAnimation from "./animation/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ModalProps } from "./Modal.type";

const Modal = ({ children }: ModalProps) => {
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsShow(false);
  };

  const handleAnimationComplete = () => {
    if (!isShow) router.back();
  };

  return (
    <AnimatePresence>
      <div className="fixed h-full w-full">
        {/* 배경 오버레이 */}
        <motion.div
          style={overlayAnimation.style}
          initial={overlayAnimation.initial}
          animate={isShow ? overlayAnimation.animate : overlayAnimation.exit}
          exit={overlayAnimation.exit}
          transition={overlayAnimation.transition}
          onClick={() => handleClose()}
          onAnimationComplete={handleAnimationComplete}
        />

        {/* 모달 컨텐츠 */}
        <motion.div
          style={modalAnimation.style}
          initial={modalAnimation.initial}
          animate={isShow ? modalAnimation.animate : modalAnimation.exit}
          exit={modalAnimation.exit}
          transition={modalAnimation.transition}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* <CloseButton onClick={onHide} /> */}

          <div className="flex flex-col overflow-scroll px-9 pb-4 pt-12">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
