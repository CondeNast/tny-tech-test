import { Request, Response } from "express";
import NewsModel from "../../Models/NewsModel";
import AxiosService from "../../Services/AxiosService";

class NewsControllerSingleton {
  someEvent = (req: Request, res: Response) => {
    res.status(200).json({ stat: "ok" });
  };

  fetchHeadlinesNews = async (req: Request, res: Response) => {
    try {
      let { country, pageSize, page, category } = req.query as any;
      country = country ? country : "us";
      pageSize = pageSize ? pageSize : 20;
      page = page ? page : 1;
      category = category ? category : "general";
      const resp = await AxiosService.axiosClient.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}`
      );
      const data = resp.data as NewsModel;

      return res.status(200).json(data);
    } catch (err) {
      return this.sendError(err, res);
    }
  };

  fetchSearchBySearchQuery = async (req: Request, res: Response) => {
    try {
      let { q, pageSize, page, category } = req.query as any;

      pageSize = pageSize ? pageSize : 20;
      page = page ? page : 1;
      category = category ? category : "general";
      const resp = await AxiosService.axiosClient.get(
        `https://newsapi.org/v2/everything?q=${encodeURI(
          q
        )}&pageSize=${pageSize}&page=${page}`
      );
      const data = resp.data as NewsModel;
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return this.sendError(err, res);
    }
  };

  private sendError = (err: any, res: Response) => {
    return res.status(400).json({ err });
  };
}

const NewsController = new NewsControllerSingleton();

export default NewsController;
