import { collection, getDoc } from "firebase/firestore";

import { API_ROUTES, db } from "../../constants/_index";

/**
 * 강의 Document ID로 강의 정보를 가져오는 함수
 * @param {string} lectureId 강의 Document ID
 * @returns {Promise<import("firebase/firestore").DocumentSnapshot>} 강의 정보 Document Snapshot
 */
const getFetchLecture = async (lectureId) => {
  return await getDoc(collection(db, API_ROUTES.LECTURES, lectureId));
};

export default getFetchLecture;
