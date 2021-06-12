import NewsModel from "../../../utils/NewsModel";

export enum NewsActionsType {
  TEST = "TEST",
  LATEST_NEWS = "LATEST_NEWS",
  NEWS_FETCH_ERROR = "NEWS_FETCH_ERROR",
  NEWS_FETCHING = "NEWS_FETCHING",
  NEWS_ADD = "NEWS_ADD",
}

interface TestActionsModel {
  type: NewsActionsType.TEST;
}

interface ErrorFetchNewsModel {
  type: NewsActionsType.NEWS_FETCH_ERROR;
}

interface LatestNewsActionModel {
  type: NewsActionsType.LATEST_NEWS;
  payload: NewsModel;
}

interface AddNewsActionModel {
  type: NewsActionsType.NEWS_ADD;
  payload: NewsModel;
}

interface NewsFetchingModel {
  type: NewsActionsType.NEWS_FETCHING;
}

export type NewsActionsModel =
  | TestActionsModel
  | LatestNewsActionModel
  | ErrorFetchNewsModel
  | AddNewsActionModel
  | NewsFetchingModel;
