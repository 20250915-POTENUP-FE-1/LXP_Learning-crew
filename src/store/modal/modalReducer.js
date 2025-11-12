import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modal",
  initialState: {
    isModalShow: false,
  },

  reducers: {
    isModalVisible: (state) => state.isModalShow,
    showModal: (state) => {
      state.isModalShow = true;
    },
    hideModal: (state) => {
      state.isModalShow = false;
    },
  },
});

export const { showModal, hideModal } = modalReducer.actions;
export default modalReducer.reducer;
