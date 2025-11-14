import { useDispatch, useSelector } from "react-redux";
import CurriculumList from "./components/CurriculumList";
import DetailHeader from "./components/DetailHeader";
import InformationCard from "./components/InformationCard";
import LectureDetailContext from "./context/lectureDetailContext";
import Icon from "../../../Icon/Icon";
import {
  addCurriculum,
  resetCurriculums,
  setCurriculums,
} from "../../../../store/curriculum/curriculumReducer";
import Button from "../../../Button/Button";
import useFormData from "./hooks/useFormData";
import { useEffect } from "react";
import useLecture from "../../../../hooks/service/useLecture";
import useCurriculums from "../../../../hooks/service/useCurriculums";
import {
  resetPost,
  setPost,
} from "../../../../store/writePost/writePostReducer";

/**
 *
 * @param {"edit"|"read"} mode LectureDetail 모달 컨텐츠의 모드
 * @returns
 */
const LectureDetail = ({ mode = "read", lectureId }) => {
  const curriculumRedux = useSelector((state) => state.curriculum.curriculums);
  const post = useSelector((state) => state.writePost);
  const dispatch = useDispatch();
  const { uploadLecture } = useFormData();
  const { getLecture } = useLecture();
  const { getCurriculum } = useCurriculums();

  useEffect(() => {
    if (!lectureId) {
      dispatch(resetCurriculums());
      dispatch(resetPost());

      return;
    }

    (async () => {
      const lectureData = await getLecture(lectureId);
      const curriculumData = await getCurriculum(
        lectureData.data.data().curriculums,
      );
      console.log("lect", lectureId, lectureData);
      console.log("as");
      console.log("lect", lectureData.data.data());
      console.log("curri", curriculumData.data);

      if (lectureData) dispatch(setPost(lectureData.data.data()));
      else dispatch(setPost());

      if (curriculumData)
        dispatch(setCurriculums(curriculumData.data.curriculums));
      else dispatch(resetCurriculums());

      console.log(curriculumData);
    })();
  }, []);

  if (lectureId && !post && !curriculumRedux) return <div>로딩중...</div>;

  return (
    <LectureDetailContext.Provider value={{ mode }}>
      <div className="flex flex-col gap-6">
        <div className="mt-8 h-auto">
          <DetailHeader
            mode={mode}
            type={post.type || { text: "개발", variant: "blue" }}
            title={post.title || "ㅎㅇ"}
            image={post.imageUrl || ""}
            description={post.description || "ㅎㅇ"}
            price={post.price || 0}
          />
        </div>
        <div className="flex gap-4">
          {mode === "edit" ? (
            <></>
          ) : (
            <>
              <InformationCard value="2,457" description="수강중인 인원" />
              <InformationCard value="2시간" description="강의 시간" />
              <InformationCard value="4.5" description="평점" />
              <InformationCard value="초급" description="난이도" />
            </>
          )}
        </div>

        {curriculumRedux.map((curriculum, curriculumIndex) => {
          console.log(curriculum);
          return (
            <CurriculumList
              key={curriculumIndex}
              curriculumIndex={curriculumIndex}
              title={curriculum.title}
              details={curriculum.details}
            />
          );
        })}

        {mode === "edit" && (
          <button
            className="flex cursor-pointer items-center justify-center gap-2"
            onClick={() => {
              dispatch(addCurriculum());
            }}
          >
            <Icon name="SMALL_PLUS_CIRCLE" />
            <p className="text-[15px] text-[#757575]">커리큘럼 추가</p>
          </button>
        )}
      </div>

      <Button
        className="px-10 py-2"
        variant={"primary"}
        onClick={() =>
          (async () => {
            await uploadLecture({ ...post, curriculums: curriculumRedux });
          })()
        }
      >
        등록하기
      </Button>
    </LectureDetailContext.Provider>
  );
};

export default LectureDetail;
