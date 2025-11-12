import { motion, useAnimation } from "framer-motion"; // eslint-disable-line no-unused-vars
import CurriculumListItem from "./CurriculumListItem";
import Icon from "../../Icon/Icon";
import { useState } from "react";
import Button from "../../Button/Button";

const CurriculumList = ({
  title = "리액트 시작하기와 기본 개념",
  // totalDuration = "10시간",
  details = [
    { title: "리액트 시작하기와 개념", duration: "2시간", type: "video" },
    {
      title: "리액트 시작하기와 기초개념",
      duration: "1시간",
      type: "article",
    },
    { title: "리액트 고수되기", duration: "3시간", type: "video" },
    { title: "리액트 마스터", duration: "4시간", type: "article" },
    { title: "리액트로 살아남기", duration: "2시간", type: "video" },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const detailControls = useAnimation();

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      detailControls.start({
        height: "auto",
        opacity: 1,
      });
    } else {
      detailControls.start({
        height: 0,
        opacity: 0,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 text-[15px]">
      <motion.div
        className="flex h-12 w-full cursor-pointer place-items-center justify-between rounded-xl p-6 font-semibold ring-1 select-none ring-inset"
        initial={{
          scale: 1,
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "ease", duration: 0.1 }}
        onClick={handleToggle}
      >
        {title}
        <Icon name="BOTTOM_ARROW" />
      </motion.div>
      <motion.div
        className="scrollbar-hide flex flex-col justify-end overflow-auto rounded-2xl ring-1 ring-[#D9D9D9] ring-inset"
        animate={detailControls}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {details.map((detail, index) => (
          <CurriculumListItem key={index} detail={detail} />
        ))}
      </motion.div>
    </div>
  );
};

export default CurriculumList;
