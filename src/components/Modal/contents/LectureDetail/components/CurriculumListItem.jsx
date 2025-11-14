import React, { useContext, useRef } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import LectureDetailContext from "../context/lectureDetailContext";
import clsx from "clsx";
import Icon from "../../../../Icon/Icon";
import { useDispatch } from "react-redux";
import {
  addDetailCurriculum,
  updateDetailCurriculum,
} from "../../../../../store/curriculum/curriculumReducer";

const CurriculumListItem = ({
  curriculumIndex = 0,
  curriculumDetailIndex = 0,
  detail,
}) => {
  const context = useContext(LectureDetailContext);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleContainerClick = () => {
    if (context.mode === "edit" && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <motion.div
      className={clsx(
        "m-2 flex cursor-pointer place-items-center justify-between rounded-xl p-3 text-[#333333]",
        `${context.mode === "edit" ? "cursor-text" : ""}`,
      )}
      initial={{ backgroundColor: "#FFFFFF" }}
      whileHover={{ backgroundColor: "#f1f1f1" }}
      transition={{ type: "spring", duration: 0.2 }}
      onClick={handleContainerClick}
    >
      {context.mode === "edit" ? (
        <>
          <input
            ref={inputRef}
            type="text"
            className="flex w-full bg-transparent outline-none"
            defaultValue={detail.title}
            placeholder={detail.title || "상세 강의 내용을 적어주세요"}
            onBlur={() => {
              dispatch(
                updateDetailCurriculum({
                  curriculumIndex: curriculumIndex,
                  curriculumDetailIndex: curriculumDetailIndex,
                  updatedCurriculum: {
                    title: inputRef.current.value,
                  },
                }),
              );
            }}
          />
        </>
      ) : (
        <>{detail.title}</>
      )}
      <div className="flex w-fit items-center gap-2 text-xs whitespace-nowrap">
        {detail.duration}

        {context.mode === "edit" ? (
          <>
            <button className="cursor-pointer">
              <Icon name="SMALL_CLOSE_CIRCLE" />
            </button>

            <button
              className="cursor-pointer"
              onClick={() => {
                dispatch(
                  addDetailCurriculum({
                    curriculumIndex: curriculumIndex,
                    curriculumDetailIndex: curriculumDetailIndex,
                  }),
                );
              }}
            >
              <Icon name="SMALL_PLUS_CIRCLE" />
            </button>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};

export default CurriculumListItem;
