import { createSlice } from "@reduxjs/toolkit";
import { awards } from "@/util/Awards";

const awardSlice = createSlice({
  name: "awards",
  initialState: awards,
  reducers: {},
});

export default awardSlice.reducer;
