import { addDoc, collection } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

/**
 * 강의 커리큘럼을 Firestore에 추가하는 API
 * @param {Array<Object>} curriculums 강의 커리큘럼 배열
 * @returns {Promise<import("firebase/firestore").DocumentReference>} Firestore에 추가된 lectureCurriculums 문서 참조 정보
 */
const postFetchLectureCurriculums = async (curriculums) => {
  return await addDoc(collection(db, API_ROUTES.LECTURE_CURRICULUMS), {
    curriculums: curriculums,
  });
};

export default postFetchLectureCurriculums;
