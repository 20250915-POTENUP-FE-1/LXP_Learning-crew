import HeaderContent from "../components/ModalHeaderContent";
import CourseStats from "../components/ModalCourseStats";
import CurriculumList from "../components/CurriculumList";

const LectureDetail = () => {
  return (
    <div className="flex flex-col gap-6">
      <div id="lecture-detail--header" className="mt-8 h-auto">
        <HeaderContent />
      </div>
      <div className="flex gap-4">
        <CourseStats value="2,457" description="수강중인 인원" />
        <CourseStats value="2시간" description="강의 시간" />
        <CourseStats value="4.5" description="평점" />
        <CourseStats value="초급" description="난이도" />
      </div>
      <CurriculumList />
    </div>
  );
};

export default LectureDetail;
