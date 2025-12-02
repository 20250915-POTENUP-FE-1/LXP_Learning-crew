// import { doc, getDoc } from "firebase/firestore";
// import { API_ROUTES } from "../../constants/apiRoutes";  
// import { db } from "../../constants/firebase";  

// /**
//  * 유저 Document ID로 유저 정보를 가져오는 함수
//  * @param {string} userId 사용자 Document ID
//  * @returns {Promise<import("firebase/firestore").DocumentSnapshot>} 유저 정보 Document Snapshot
//  */
// const getFetchUser = async (userId) => {
//   return await getDoc(doc(db, API_ROUTES.USERS, userId));
// };

// export default getFetchUser;

// src/apis/users/getFetchUser.js (수정)

import { collection, query, where, getDocs } from "firebase/firestore"; // 💡 getDocs, query, where 추가
import { db } from "../../constants/firebase"; // 💡 db 인스턴스 import

const getFetchUser = async (userId) => {
  // 1. 쿼리 생성: users 컬렉션에서 'userId' 필드가 인수로 받은 userId와 일치하는 문서를 찾습니다.
  const usersRef = collection(db, 'users'); // 🚨 API_ROUTES.USERS 대신 'users'로 가정 (정확한 상수명 확인 필요)
  
  const q = query(usersRef, where('userId', '==', userId)); 
  
  // 2. 쿼리 실행
  const querySnapshot = await getDocs(q);
  
  // 3. 💥 첫 번째 결과 문서를 반환 (로그인한 유저는 문서가 하나만 있어야 함)
  if (!querySnapshot.empty) {
      // 💡 찾은 문서 중 첫 번째 문서의 스냅샷을 반환합니다.
      return querySnapshot.docs[0]; 
  }
  
  // 문서가 없으면 빈 스냅샷 또는 null 반환
  return null; 
};

export default getFetchUser;