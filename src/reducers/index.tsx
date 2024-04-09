import counter from "./counterReducer";
import auth from "./authReducer";
import apiShow from "./apiReducer"
import pagination from "./paginationReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
  apiShow,
  pagination
});
export default allReducers;