import { Dispatch } from "react";
import AxiosService from "../../../utils/AxiosService";
import LastRequest from "../../../utils/LastRequest";
import NewsModel from "../../../utils/NewsModel";
import getQuery from "../../../utils/query.helper";
import { NewsActionsModel, NewsActionsType } from "./NewsActionModel";

export const newsActionGetLatest = (pathname: string) => {
  return async (dispatch: Dispatch<NewsActionsModel>) => {
    try {
      console.log("starting dispatch");
      dispatch({
        type: NewsActionsType.NEWS_FETCHING,
      });
      LastRequest.type = "latest";
      LastRequest.date = "";
      LastRequest.query = `country=in`;
      LastRequest.category = getQuery(pathname);
      LastRequest.page = 1;
      LastRequest.pageSize = 20;
      const response = await AxiosService.axiosClient.get(
        `api/v1/news/?${LastRequest.query}&category=${LastRequest.category}&pageSize=${LastRequest.pageSize}&page=${LastRequest.page}`
      );
      const data = response.data as NewsModel;
      dispatch({
        type: NewsActionsType.LATEST_NEWS,
        payload: data,
      });
    } catch (err) {
      console.log({ err });
      dispatch({
        type: NewsActionsType.NEWS_FETCH_ERROR,
      });
    }
  };
};

export const newsActionGetSearch = (search: string, pathname: string) => {
  return async (dispatch: Dispatch<NewsActionsModel>) => {
    try {
      dispatch({
        type: NewsActionsType.NEWS_FETCHING,
      });

      LastRequest.type = "search";
      LastRequest.date = "";
      LastRequest.query = search;
      LastRequest.category = getQuery(pathname);
      LastRequest.page = 1;
      LastRequest.pageSize = 20;

      const response = await AxiosService.axiosClient.get(
        `api/v1/news/search/?q=${LastRequest.query}&category=${LastRequest.category}&pageSize=${LastRequest.pageSize}&page=${LastRequest.page}`
      );
      const data = response.data as NewsModel;
      dispatch({
        type: NewsActionsType.LATEST_NEWS,
        payload: data,
      });
    } catch (err) {
      console.log({ err });
      dispatch({
        type: NewsActionsType.NEWS_FETCH_ERROR,
      });
    }
  };
};

export const newsActionAdd = () => {
  return async (dispatch: Dispatch<NewsActionsModel>) => {
    try {
      LastRequest.page = LastRequest.page + 1;
      LastRequest.pageSize = 20;

      const url =
        LastRequest.type === "search"
          ? `api/v1/news/search/?q=${LastRequest.query}&category=${LastRequest.category}&pageSize=${LastRequest.pageSize}&page=${LastRequest.page}`
          : `api/v1/news/?${LastRequest.query}&category=${LastRequest.category}&pageSize=${LastRequest.pageSize}&page=${LastRequest.page}`;

      const response = await AxiosService.axiosClient.get(url);
      const data = response.data as NewsModel;
      dispatch({
        type: NewsActionsType.NEWS_ADD,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: NewsActionsType.NEWS_FETCH_ERROR,
      });
    }
  };
};
