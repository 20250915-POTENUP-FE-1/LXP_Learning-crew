import { collection, getDoc } from "firebase/firestore";
import { API_ROUTES, db } from "../constants/_index";

/**
 * 유저 Document ID로 유저 정보를 가져오는 함수
 * @param {string} userId 사용자 Document ID
 * @returns {Promise<import("firebase/firestore").DocumentSnapshot>} 유저 정보 Document Snapshot
 */
const getFetchUser = async (userId) => {
  return await getDoc(collection(db, API_ROUTES.USERS, userId));
};

export default getFetchUser;
