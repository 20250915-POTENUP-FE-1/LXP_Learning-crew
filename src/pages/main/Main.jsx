import { useEffect, useState } from "react";
import useAuth from "../../hooks/service/useAuth";
import useUser from "../../hooks/service/useUser";
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
  const { isLoggedIn } = useAuth();
  const { userData, isLoading } = useUser();
  const dispatch = useDispatch();

  // 2. 🎣 useEffect 호출 (Hook 호출 이후)
  useEffect(() => {
    (async () => {
      const data = await getLectures(1);
      console.log("wow", data);

      if (data.success) {
        setLectureData(data.data);
      }
    })();
  }, []);

  // 3. 💡 변수 정의
  const fullUserName = userData?.name || "손님";
  const userName = fullUserName === "손님" ? "손님" : fullUserName.slice(-2);

  // 4. 🚨 로딩 상태 처리 (모든 Hook 호출 이후)
  if (isLoading) {
    return (
      <div className="flex flex-col items-center pt-20">
        <p className="text-gray-500">사용자 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  // 5. 👑 정상 렌더링 시작
  return (
    <div className="flex flex-col items-center">
      <div className="my-18">
        <OnboardingMessage
          name={userName}
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
