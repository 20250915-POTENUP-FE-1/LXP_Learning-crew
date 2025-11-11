import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

/**
 * 유저 정보를 Firestore에 추가하는 API
 * @param {string} displayName 이름
 * @param {"user" | "creator"} role 유저 역할
 * @returns {Promise<import("firebase/firestore").DocumentReference>} Firestore에 추가된 users 문서 참조 정보
 */
const postFetchUser = async (uid, displayName, role) => {
  return await addDoc(collection(db, API_ROUTES.USERS), {
    userId: uid,

    displayName: displayName,
    role: role,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    deletedAt: null,
  });
};

export default postFetchUser;
