import {
  collection,
  getDocs,
  query,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "../../constants/firebase";
import { API_ROUTES } from "../../constants/apiRoutes";

/**
 * 강의 목록을 페이징 처리하여 가져오는 함수
 * @param {number} pageSize 한 번에 불러올 강의 개수
 * @param {import("firebase/firestore").DocumentSnapshot} lastDoc 마지막으로 불러온 강의 문서
 * @returns {Promise<{lectures: Array<Object>, lastDoc: import("firebase/firestore").DocumentSnapshot}>} 강의 배열과 마지막 문서 스냅샷
 */
const getFetchLectures = async (pageSize = 10, lastDoc) => {
  const querySnapshot = query(
    collection(db, API_ROUTES.LECTURES),
    lastDoc ? startAfter(lastDoc) : undefined,
    limit(pageSize),
  );

  const lectureSnapshots = await getDocs(querySnapshot);

  const lectures = lectureSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    lectures,
    lastDoc: lectureSnapshots.docs[lectureSnapshots.docs.length - 1],
  };
};

export default getFetchLectures;
