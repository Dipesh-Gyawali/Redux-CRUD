import { applyMiddleware, compose, createStore } from "redux";
import allReducers from "../reducers";
import { thunk } from "redux-thunk";

export const store = createStore(
  allReducers,
  // undefined,
  compose(applyMiddleware(thunk))
);
