/* eslint-disable react-hooks/rules-of-hooks */
// soundSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import useSound from "use-sound";

const initialState = {
  currentSound: null,
  isPlaying: false,
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    playSound: (state, action) => {
      const [play] = useSound(action.payload);

      play();

      state.isPlaying = true;
      state.currentSound = action.payload;
    },
    stopSound: (state) => {
      state.isPlaying = false;
      state.currentSound = null;
    },
    resetSound: (state) => {
      state.currentSound = null;
      state.isPlaying = false;
    },
  },
});

export const { playSound, stopSound, resetSound } = soundSlice.actions;
export default soundSlice.reducer;
