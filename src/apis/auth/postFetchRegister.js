import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../constants/firebase";

/**
 * 새로운 계정을 생성하는 API
 * @param {string} email 계정에 사용할 이메일
 * @param {string} password 계정에 사용할 비밀번호
 * @returns {Promise<import("firebase/auth").UserCredential>} 생성된 사용자 정보
 */
const postFetchRegister = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error creating user:", error);
  }
};

export default postFetchRegister;
