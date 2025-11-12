import { useEffect } from "react";
import useAuth from "../../hooks/service/useAuth";
import LectureCard from "./components/lecture/LectureCard";
import LectureList from "./components/lecture/LectureList";
import OnboardingMessage from "./components/onboarding/OnboardingMessage";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/modalReducer";
import LectureDetail from "../../components/Modal/contents/LectureDetail";
import Button from "../../components/Button/Button";

const Main = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  });

  return (
    <div className="flex flex-col items-center">
      <div className="my-18">
        <OnboardingMessage name={"종원"} />
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
