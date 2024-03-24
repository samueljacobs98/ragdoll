import express from "express";
import * as middleware from "./api/middleware";
import { Logger } from "./api/utils/logger";
import { v1Router } from "./routes";

const app = express();
const port = 3000;

const logger = Logger.new("App");

middleware.addMiddleware(app);

app.use("/v1", v1Router);

app.listen(port, () => {
  logger.log(
    "listen",
    `
    
      Server is running on port ${port}
      Connection: http://localhost:3000/v1
    `
  );
});
