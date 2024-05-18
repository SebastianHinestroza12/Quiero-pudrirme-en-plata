import {combineReducers} from 'redux';
import awardSlice from "./Reducers/Awards";
import currentAwardSlice from "./Reducers/CurrentAward";
import soundSlice from "./Reducers/Sound";

const rootReducer = combineReducers({
  awardSlice,
  soundSlice,
  currentAwardSlice,
});

export default rootReducer;
