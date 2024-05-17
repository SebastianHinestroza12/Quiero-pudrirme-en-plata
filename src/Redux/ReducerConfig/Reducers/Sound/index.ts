// import { createSlice } from "@reduxjs/toolkit";
// import { Howl } from "howler";

// let soundInstance: Howl | null = null;

// const initialState = {
//   currentSound: null,
//   isPlaying: false,
// };

// const soundSlice = createSlice({
//   name: "sound",
//   initialState,
//   reducers: {
//     playSound: (state, action) => {
//       if (soundInstance) {
//         soundInstance.stop();
//       }

//       soundInstance = new Howl({
//         src: ["/src/sound/pregunta.wav"],
//         onend: () => {
//           state.isPlaying = false;
//         },
//       });

//       soundInstance.play();
//       state.isPlaying = true;
//       state.currentSound = action.payload;
//     },
//     stopSound: (state) => {
//       if (soundInstance) {
//         soundInstance.stop();
//         state.isPlaying = false;
//         state.currentSound = null;
//       }
//     },
//     resetSound: (state) => {
//       if (soundInstance) {
//         soundInstance.stop();
//       }

//       soundInstance = null;
//       state.currentSound = null;
//       state.isPlaying = false;
//     },
//   },
// });

// export const { playSound, stopSound, resetSound } = soundSlice.actions;
// export default soundSlice.reducer;
