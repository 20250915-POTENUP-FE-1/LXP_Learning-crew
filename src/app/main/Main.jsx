import { useEffect } from "react";
import useAuth from "../../hooks/service/useAuth";
import useUser from "../../hooks/service/useUser";
import LectureCard from "./components/lecture/LectureCard";
import LectureList from "./components/lecture/LectureList";
import OnboardingMessage from "./components/onboarding/OnboardingMessage";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/modalReducer";
import LectureDetail from "../../components/Modal/contents/LectureDetail";
import Button from "../../components/Button/Button";

const Main = () => {
  const { isLoggedIn } = useAuth();
  const { userData, isLoading } = useUser();
  const dispatch = useDispatch();

  // 2. 🎣 useEffect 호출 (Hook 호출 이후)
  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]); // isLoggedIn이 변경될 때마다 실행되도록 종속성 배열 추가

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
        <OnboardingMessage name={userName} />
      </div>

      <LectureList>
        {Array.from({ length: 8 }).map((_, index) => (
          <LectureCard
            key={index}
            text="Sample Lecture"
            image="https://via.placeholder.com/250x140"
            title="Sample Lecture"
            description="This is a description of the sample lecture."
            level="초급"
            category="개발"
            onClick={() =>
              dispatch(
                showModal({
                  content: <LectureDetail />,
                  bottomContainer: (
                    <>
                      <Button className="px-10 py-2">삭제하기</Button>
                      <Button className="px-10 py-2" variant={"primary"}>
                        수정하기
                      </Button>
                    </>
                  ),
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
