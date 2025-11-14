import { createSlice } from "@reduxjs/toolkit";

const curriculumReducer = createSlice({
  name: "curriculum",
  initialState: {
    curriculums: [{ title: "", details: [{ title: "", duration: "00:00" }] }],
  },

  reducers: {
    getCurriculums: (state) => {
      return state.curriculums;
    },

    setCurriculums: (state, action) => {
      state.curriculums = action.payload;
    },

    addCurriculum: (state) => {
      state.curriculums.push({
        title: "",
        details: [{ title: "", duration: "00:00" }],
      });
    },

    updateCurriculum: (state, action) => {
      const { curriculumIndex, updatedCurriculum } = action.payload;

      state.curriculums[curriculumIndex] = {
        ...state.curriculums[curriculumIndex],
        ...updatedCurriculum,
      };
    },

    deleteCurriculum: (state, action) => {
      const { curriculumIndex } = action.payload;

      state.curriculums.splice(curriculumIndex, 1);
    },

    addDetailCurriculum: (state, action) => {
      const { curriculumIndex } = action.payload;

      state.curriculums[curriculumIndex].details.push({
        title: "",
        duration: "00:00",
      });
    },

    updateDetailCurriculum: (state, action) => {
      const { curriculumIndex, curriculumDetailIndex, updatedCurriculum } =
        action.payload;

      state.curriculums[curriculumIndex].details[curriculumDetailIndex] = {
        ...state.curriculums[curriculumIndex].details[curriculumDetailIndex],
        ...updatedCurriculum,
      };
    },

    deleteDetailCurriculum: (state, action) => {
      const { curriculumIndex, curriculumDetailIndex } = action.payload;

      state.curriculums[curriculumIndex].details.splice(
        curriculumDetailIndex,
        1,
      );
    },

    resetCurriculums: (state) => {
      state.curriculums = [
        { title: "", details: [{ title: "", duration: "00:00" }] },
      ];
    },
  },
});

export const {
  setCurriculums,
  addCurriculum,
  updateCurriculum,
  deleteCurriculum,
  addDetailCurriculum,
  updateDetailCurriculum,
  deleteDetailCurriculum,
  resetCurriculums,
} = curriculumReducer.actions;
export default curriculumReducer.reducer;
