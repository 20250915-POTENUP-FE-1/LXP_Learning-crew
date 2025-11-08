import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../constants/firebase";

/**
 * 회원 로그인을 처리하는 API
 * @param {string} email 로그인을 시도하기 위한 회원의 email
 * @param {string} password 로그인을 시도하기 위한 회원의 password
 * @returns {Promise<import("firebase/auth").UserCredential>} 로그인된 사용자 정보
 */
const postFetchLogin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export default postFetchLogin;
