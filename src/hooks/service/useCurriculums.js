import getFetchCurriculums from "../../apis/curriculums/getFetchCurriculums";

const useCurriculum = () => {
  const getCurriculum = async (curriculumId) => {
    try {
      const data = await getFetchCurriculums(curriculumId);
      return {
        success: true,
        data: data.data(),
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return { getCurriculum };
};

export default useCurriculum;
