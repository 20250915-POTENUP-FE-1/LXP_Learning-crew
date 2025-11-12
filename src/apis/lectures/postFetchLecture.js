import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { API_ROUTES, db } from "../../constants/_index";

/**
 * 강의 정보를 Firestore에 추가하는 API
 * @param {string} title 강의 제목
 * @param {string} description 강의 설명
 * @param {string} imageUrl 강의 사진 주소
 * @param {string} tag 강의
 * @param {string} level 강의 난이도
 * @param {number} price 강의 가격
 * @param {Array<Object>} curriculum 강의 커리큘럼 배열
 * @returns {Promise<import("firebase/firestore").DocumentReference>} Firestore에 추가된 lectures 컬렉션의 문서 참조 정보
 */
const postFetchLecture = async (
  title,
  description,
  imageUrl = "",
  tag,
  level,
  price,
  curriculums,
) => {
  return addDoc(collection(db, API_ROUTES.LECTURES), {
    title: title,
    description: description,
    imageUrl: imageUrl,
    tag: tag,
    level: level,
    price: price,
    curriculums: curriculums,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    deletedAt: null,
  });
};

export default postFetchLecture;
