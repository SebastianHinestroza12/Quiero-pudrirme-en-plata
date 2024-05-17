import { createSlice } from "@reduxjs/toolkit";

const currentAwardSlice = createSlice({
  name: "currentAward",
  initialState: 1,
  reducers: {
    setCurrentAward: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCurrentAward } = currentAwardSlice.actions;
export default currentAwardSlice.reducer;
