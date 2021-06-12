import { combineReducers } from "redux";
import NewsReducer, { NewsReducerStateModel } from "./NewsReducers";

const rootReducer = combineReducers({
  news: NewsReducer,
});

export default rootReducer;
export type RootReducerModel = ReturnType<typeof rootReducer>;
