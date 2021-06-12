import express from "express";
import newsRouter from "./news/news_routes";

const version1Router = express.Router();

version1Router.use("/news", newsRouter);

export default version1Router;
