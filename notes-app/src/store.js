import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import groupReducer from "./reducers/groupReducer";
import noteReducer from "./reducers/noteReducer";

const rootReducer = combineReducers({
  groups: groupReducer,
  notes: noteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
