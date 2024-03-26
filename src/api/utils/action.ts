import { Request, Response } from "express";
import { InternalServerError, RagdollError } from "../core/models/errors";
import { Logger } from "./logger";

const logger = Logger.new("action");

/**
 *
 * TODO: Update this to be specific to this project
 * - Will need to add a status to RagdollError
 */
const action = (fn: (req: Request, res: Response) => Promise<void>) => {
  return async (req: Request, res: Response) => {
    try {
      await fn(req, res);
    } catch (err) {
      const error =
        err instanceof RagdollError ? err : new InternalServerError(`${err}`);

      logger.error("action", error.message);
      res.status(error.status).json({
        name: error.name,
        message: error.message,
      });
      return;
    }
  };
};

export { action };
