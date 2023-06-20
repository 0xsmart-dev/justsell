import { createSlice } from "@reduxjs/toolkit";
import { IMainState } from "app/config/@interfaces/redux.interface";

const initialState: IMainState = {
  articles: [],
};

export const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = slice.actions;

export default slice.reducer;
