import { combineReducers } from "redux";
import { issueSlice } from "../reducer/issues";

export const rootReducer = combineReducers({
  issue: issueSlice.reducer,
});
