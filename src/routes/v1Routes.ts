import multer from "multer";
import express from "express";
import { action } from "../api/utils";
import { config } from "../api/config";
import { pingController, ragController } from "../v1/controllers";

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.get("/ping", action(pingController.handleRequest));

router.post(
  "/rag",
  upload.array("files", config.app.maxFilesCount),
  action(ragController.handleRequest)
);

export { router };
