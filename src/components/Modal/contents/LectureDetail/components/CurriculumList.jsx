import { motion, useAnimation } from "framer-motion";
import { useContext, useRef, useState } from "react";
import CurriculumListItem from "./CurriculumListItem";
import Icon from "../../../../Icon/Icon";
import LectureDetailContext from "../context/lectureDetailContext";
import { tv } from "tailwind-variants";
import { CurriculumContext } from "./CurriculumProvider"; // ✅ Context import
import {
  deleteCurriculum,
  updateCurriculum,
} from "../../../../../store/curriculum/curriculumReducer";
import { useDispatch } from "react-redux";

const containerStyles = tv({
  base: "flex h-12 w-full cursor-pointer outline-none place-items-center justify-between rounded-xl p-6 font-semibold ring-1 select-none ring-inset",
  variants: {
    mode: {
      edit: "cursor-text",
      read: "",
    },
  },
  defaultVariants: {
    mode: "read",
  },
});

const inputStyles = tv({
  base: "w-full bg-transparent outline-none",
  variants: {
    mode: {
      edit: "text-zinc-400 hover:text-zinc-600 focus:text-black",
      read: "",
    },
  },
});

const CurriculumList = ({
  curriculumIndex = 0,
  title = "리액트 시작하기와 기본 개념",
  details,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const detailControls = useAnimation();
  const context = useContext(LectureDetailContext);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (context.mode === "edit") {
      inputRef.current.focus();
      return;
    }

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
        className={containerStyles({ mode: context.mode })}
        initial={{
          scale: 1,
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "ease", duration: 0.1 }}
        onClick={handleToggle}
      >
        {context.mode === "edit" ? (
          <input
            ref={inputRef}
            type="text"
            className={inputStyles({ mode: context.mode })}
            defaultValue={title}
            placeholder={title || "섹션 제목을 적어주세요"}
            onBlur={() => {
              dispatch(
                updateCurriculum({
                  curriculumIndex: curriculumIndex,
                  updatedCurriculum: {
                    title: inputRef.current.value,
                  },
                }),
              );
            }}
          />
        ) : (
          <div>{title}</div>
        )}

        {context.mode === "edit" ? (
          <button
            className="cursor-pointer px-2 font-normal whitespace-nowrap text-[#757575]"
            onClick={() => {
              dispatch(deleteCurriculum({ curriculumIndex }));
            }}
          >
            삭제
          </button>
        ) : (
          <Icon name="BOTTOM_ARROW" />
        )}
      </motion.div>

      <motion.div
        className="scrollbar-hide flex flex-col justify-end overflow-auto rounded-2xl ring-1 ring-[#D9D9D9] ring-inset"
        animate={detailControls}
        transition={{ duration: 0.4, type: "spring" }}
      >
        {details.length > 0 ? (
          details.map((detail, index) => (
            <CurriculumListItem
              key={index}
              detail={detail}
              curriculumIndex={curriculumIndex}
              curriculumDetailIndex={index}
            />
          ))
        ) : (
          <CurriculumListItem key={0} curriculumIndex={0} detail={{}} />
        )}
      </motion.div>
    </div>
  );
};

export default CurriculumList;
