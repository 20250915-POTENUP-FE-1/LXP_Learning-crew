import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

/**
 * 강의 평점을 Firestore에 추가하는 API
 * @param {string} lectureId firebase에 등록된 lectureId
 * @param {string} userId firebase에 등록된 userId
 * @param {number} rate 사용자가 매긴 강의 평점 (1~5)
 * @returns {Promise<import("firebase/firestore").DocumentReference>} Firestore에 추가된 lectureRates 문서 참조 정보
 */
const postFetchLectureRate = async (lectureId, userId, rate) => {
  return await addDoc(collection(db, API_ROUTES.LECTURE_RATES), {
    lectureId: lectureId,
    userId: userId,

    rate: rate,

    createdAt: serverTimestamp(),
  });
};

export default postFetchLectureRate;
