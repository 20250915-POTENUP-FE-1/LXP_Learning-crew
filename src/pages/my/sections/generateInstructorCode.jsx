// // 1. 💥 난수 생성 함수 (return 오류 수정)
// const generateInstructorCode = (length = 6) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let result = "";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result; // 👈 여기서 생성된 'result'를 반환하도록 수정
// };

// // --- 중복 방지 및 DB 저장 로직 추가 ---

// /**
//  * 2. 💡 생성된 코드가 DB에 중복되는지 확인하고 저장하는 함수
//  * @param {string} code - 6자리 난수 코드
//  * @param {string} issuerUid - 발급 관리자의 UID
//  * @returns {Promise<boolean>} - 성공/실패 (중복 시 false 반환)
//  */
// export const saveCodeToFirestore = async (code, issuerUid) => {
//   const codesRef = collection(db, "instructorCodes");
//   const q = query(codesRef, where("code", "==", code));

//   try {
//     const querySnapshot = await getDocs(q);

//     // 중복 확인: 문서가 이미 존재하면 중복임
//     if (!querySnapshot.empty) {
//       console.warn(`[DUPLICATE] Code ${code} already exists.`);
//       return false;
//     }

//     // 중복이 없으면 DB에 저장
//     await addDoc(codesRef, {
//       code: code,
//       issuedBy: issuerUid,
//       issuedAt: serverTimestamp(), // 서버 타임스탬프 사용
//       status: "available",
//       usedBy: null,
//     });

//     console.log(`Code [${code}] saved successfully.`);
//     return true;
//   } catch (e) {
//     console.error("DB 작업 중 오류 발생:", e);
//     return false;
//   }
// };

// console.log(generateInstructorCode);

// export default generateInstructorCode;
