import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/root_reducer";

export const Store = createStore(rootReducer, {}, applyMiddleware(thunk));
