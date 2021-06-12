import express from "express";
import NewsController from "../../../../Controllers/news/news_controller";

const newsRouter = express.Router();

/**
 * @route get api/v1/news
 * @desc Fetches the headlines
 * @access Public currently
 */
newsRouter.get("/", NewsController.fetchHeadlinesNews);

newsRouter.get("/search", NewsController.fetchSearchBySearchQuery);

export default newsRouter;
