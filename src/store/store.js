import { legacy_createStore as createStore } from "redux";
import  reducer  from "../reducers/movieReducer";

export const store = createStore(reducer);
