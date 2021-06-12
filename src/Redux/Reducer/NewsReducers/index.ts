import NewsModel from "../../../utils/NewsModel";
import {
  NewsActionsModel,
  NewsActionsType,
} from "../../Actions/NewsActions/NewsActionModel";

export interface NewsReducerStateModel {
  data: NewsModel;
  error: boolean;
  loading: boolean;
}

const initialState: NewsReducerStateModel = {
  data: new NewsModel(),
  error: false,
  loading: true,
};

const NewsReducer = (
  state = initialState,
  action: NewsActionsModel
): NewsReducerStateModel => {
  switch (action.type) {
    case NewsActionsType.LATEST_NEWS:
      return { data: action.payload, error: false, loading: false };
    case NewsActionsType.NEWS_FETCHING:
      return { data: initialState.data, error: false, loading: true };
    case NewsActionsType.NEWS_ADD:
      return {
        error: false,
        loading: false,
        data: {
          status: action.payload.status,
          totalResults: action.payload.totalResults,
          articles: [...state.data.articles, ...action.payload.articles],
        },
      };
    case NewsActionsType.NEWS_FETCH_ERROR:
      return { data: initialState.data, error: true, loading: false };
    default:
      return state;
  }
};

export default NewsReducer;
