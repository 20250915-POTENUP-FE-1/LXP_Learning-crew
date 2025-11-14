import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalReducer";
import curriculumReducer from "./curriculum/curriculumReducer";
import writePostReducer from "./writePost/writePostReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    curriculum: curriculumReducer,
    writePost: writePostReducer,
  },
});

export default store;
