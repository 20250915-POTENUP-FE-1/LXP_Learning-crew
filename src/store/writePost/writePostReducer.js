import { createSlice } from "@reduxjs/toolkit";

const writePostReducer = createSlice({
  name: "writePost",

  initialState: {
    title: "",
    description: "",
    level: "초급",
    type: { text: "개발", variant: "blue" },
    category: "",
    price: 0,
    imageUrl: null,
  },

  reducers: {
    setPost: (state, action) => {
      return { ...state, ...action.payload };
    },

    updateTitle: (state, action) => {
      state.title = action.payload;
    },

    updateDescription: (state, action) => {
      state.description = action.payload;
    },

    updateLevel: (state, action) => {
      state.level = action.payload;
    },

    updateCategory: (state, action) => {
      state.category = action.payload;
    },

    updatePrice: (state, action) => {
      state.price = action.payload;
    },

    updateImage: (state, action) => {
      state.imageUrl = action.payload;
    },

    resetPost: (state) => {
      state.title = "";
      state.description = "";
      state.level = "초급";
      state.type = { text: "개발", variant: "blue" };
      state.category = "";
      state.price = 0;
      state.imageUrl = null;
    },
  },
});

export const {
  updateTitle,
  updateDescription,
  updateLevel,
  updateCategory,
  updatePrice,
  updateImage,
  setPost,
  resetPost,
} = writePostReducer.actions;
export default writePostReducer.reducer;
