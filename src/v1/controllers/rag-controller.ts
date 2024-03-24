import { Request, Response } from "express";
import { ragValidator as validator } from "./validators";
import { RagRequestData as RequestData } from "../core/types";
import { ragService as service } from "../services";

const handleRequest = async (req: Request, res: Response) => {
  const requestData: RequestData = validator.validateRequest(req);

  const result = await service.serve(requestData);

  // res.status(200).json(result);
};

export { handleRequest };
