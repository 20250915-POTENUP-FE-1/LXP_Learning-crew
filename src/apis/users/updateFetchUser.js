import {
  collection,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

/**
 *
 * @param {string} userId 회원의 userId
 * @param {string} displayName 변경할 회원의 이름
 * @param {"user"|"creator"} role 변경할 회원의 역할
 * @returns
 */
const updateFetchUser = async (userId, displayName, role) => {
  return await updateDoc(collection(db, API_ROUTES.USERS, userId), {
    displayName: displayName,
    role: role,

    updatedAt: serverTimestamp(),
  });
};

export default updateFetchUser;
