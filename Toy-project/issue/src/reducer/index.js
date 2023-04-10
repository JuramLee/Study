import { combineReducers } from 'redux';
import { issueSlice } from '../Reducer/issues';

export const rootReducer = combineReducers({
  issue: issueSlice.reducer,
});
