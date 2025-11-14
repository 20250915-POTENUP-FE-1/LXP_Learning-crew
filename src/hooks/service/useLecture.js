import postFetchCurriculums from "../../apis/curriculums/postFetchCurriculums";
import {
  getFetchLecture,
  getFetchLectures,
  postFetchLecture,
} from "../../apis/lectures/_index";

const useLecture = () => {
  const getLecture = async (lectureId) => {
    try {
      const data = await getFetchLecture(lectureId);

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const postLecture = async ({
    title,
    description,
    imageUrl = "",
    tag,
    level,
    price,
    curriculums,
  }) => {
    try {
      console.log(curriculums);
      const curriculumsId = await postFetchCurriculums(curriculums);

      const data = await postFetchLecture({
        title: title || "제목 없음",
        description: description || "설명 없음",
        imageUrl: imageUrl || "",
        tag: tag || "기타",
        level: level || "초급",
        price: price || 0,
        curriculums: curriculumsId,
      });

      return {
        success: true,
        data: data.id,
      };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  const getLectures = async (pageSize = 10) => {
    try {
      const data = await getFetchLectures(pageSize);

      return {
        success: true,
        data: data.lectures,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return { getLecture, getLectures, postLecture };
};

export default useLecture;
