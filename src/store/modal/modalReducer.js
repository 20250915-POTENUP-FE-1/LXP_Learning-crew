import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modal",
  initialState: {
    isModalShow: false,
    modalContent: {
      content: null,
      bottomContainer: null,
    },
  },

  reducers: {
    isModalVisible: (state) => state.isModalShow,

    showModal: (state, action) => {
      state.isModalShow = true;
      state.modalContent = action.payload;
    },
    hideModal: (state) => {
      state.isModalShow = false;
    },

    getCurriculums: (state) => {
      return state.curriculums;
    },
  },
});

export const { showModal, hideModal, isModalVisible, getCurriculums } =
  modalReducer.actions;
export default modalReducer.reducer;
