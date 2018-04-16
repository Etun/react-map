import { combineReducers } from 'redux';
import pins from '../redux/pins';

const appReducer = combineReducers({
  'pins': pins,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;