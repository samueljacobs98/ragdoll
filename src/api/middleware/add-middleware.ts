import cors from "cors";
import express, { Express } from "express";

const expressMiddleware = [
  express.urlencoded({ extended: true }),
  express.json(),
  express.static("public"),
];

const corsMiddleware = [cors()];

const middleware = [...expressMiddleware, ...corsMiddleware];

const addMiddleware = (app: Express) => {
  middleware.forEach((_) => app.use(_));
};

export { addMiddleware };
