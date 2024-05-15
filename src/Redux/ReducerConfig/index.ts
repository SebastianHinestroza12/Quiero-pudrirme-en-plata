import {combineReducers} from 'redux';
import counterSlice from './Reducers/Counter';

const rootReducer = combineReducers({
  counterSlice,
  // Agrega otros reducers aquí
});

export default rootReducer;
