import { useEffect, useState } from "react";
import LectureCard from "./components/lecture/LectureCard";
import LectureList from "./components/lecture/LectureList";
import OnboardingMessage from "./components/onboarding/OnboardingMessage";
// import { showModal } from "../../store/modal/modalReducer";
import LectureDetail from "../../components/Modal/contents/LectureDetail/LectureDetail";
import useLecture from "../../hooks/service/useLecture";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/modalReducer";

const Main = () => {
  const { getLectures } = useLecture();
  const [lectureData, setLectureData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await getLectures(1);
      console.log("wow", data);

      if (data.success) {
        setLectureData(data.data);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="my-18">
        <OnboardingMessage
          name={"종원"}
          onClick={() => {
            dispatch(
              showModal({
                modalContent: <LectureDetail mode="edit" />,
              }),
            );
          }}
        />
      </div>

      <LectureList>
        {lectureData.map((lecture, index) => (
          <LectureCard
            key={index}
            image={lecture.imageUrl}
            title={lecture.title}
            description={lecture.description}
            level="초급"
            category="개발"
            onClick={() =>
              dispatch(
                showModal({
                  modalContent: <LectureDetail lectureId={lecture.id} />,
                }),
              )
            }
          />
        ))}
      </LectureList>
    </div>
  );
};

export default Main;
