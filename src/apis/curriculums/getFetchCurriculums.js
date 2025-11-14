import { doc, getDoc } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

/**
 * 커리큘럼 Document ID로 커리큘럼 정보를 가져오는 함수
 * @param {string} curriculumId curriculums collection에 등록된 Doc Id
 * @returns {Promise<import("firebase/firestore").DocumentSnapshot>} 커리큘럼 정보 Document Snapshot
 */
const getFetchCurriculums = async (curriculumId) => {
  return getDoc(doc(db, API_ROUTES.LECTURE_CURRICULUMS, curriculumId));
};

export default getFetchCurriculums;
