import { getFetchLecture, postFetchLecture } from "../../apis/lectures/_index";

const useLecture = () => {
  const getLecture = async () => {
    try {
      const data = await getFetchLecture();

      return {
        success: true,
        data: data.data(),
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const postLecture = async () => {
    try {
      const data = await postFetchLecture();

      return {
        success: true,
        data: data.toJSON(),
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return { getLecture, postLecture };
};

export default useLecture;
