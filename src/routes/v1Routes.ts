import express from "express";
import { pingController } from "../v1/controllers";
import { action } from "../api/utils";

const router = express.Router();

router.get("/ping", action(pingController.handleRequest));

export { router };
