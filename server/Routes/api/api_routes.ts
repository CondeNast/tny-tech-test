import express from "express";
import version1Router from "./v1/version_routes";

const apiRouter = express.Router();

apiRouter.use("/v1", version1Router);

export default apiRouter;
