import cors from "cors";

import express, { Express } from "express";
import dotenv from "dotenv";
import apiRouter from "./api/api_routes";
// import {Express} from 'express-serve-static-core'

dotenv.config();

const PORT = process.env.PORT || 8888;

class MainRouter {
  app: Express;
  constructor() {
    this.app = express();
    this.initServer();
  }

  private initServer() {
    this.app.use(
      cors({
        exposedHeaders: ["Content-Length", "Authorization"],
        origin(origin, callback) {
          // console.log({ origin });
          // allow requests
          return callback(null, true);
        },
      })
    );

    this.app.use("/api", apiRouter);

    this.app.use((req, res, next) => {
      const error = `{message: "Route not found"}`;
      next(error);
    });

    this.app.listen(PORT, () => console.log(`listening on ${PORT}`));
  }
}

export default MainRouter;
