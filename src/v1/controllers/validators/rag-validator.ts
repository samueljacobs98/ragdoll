import { Request } from "express";
import { BadRequestError } from "../../../api/core/models/errors";
import { validate } from "./validate";
import { ragRequestDataSchema as schema } from "./schemas";
import { RagRequestData as RequestData } from "../../core/types";

const validateRequest = (req: Request): RequestData => {
  const validationResult = validate(
    req,
    schema,
    new BadRequestError("Invalid chat request data")
  );

  return { ...validationResult };
};

export { validateRequest };
