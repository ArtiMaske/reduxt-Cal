import changeTheNumber from "./updown";
import mulTheNumber from "./MulDiv";

import { combineReducers } from "redux";

const reducers = combineReducers({
  changeTheNumber,
  mulTheNumber,
});

export default reducers;
