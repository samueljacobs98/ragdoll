import { Request, Response } from "express";

const handleRequest = async (req: Request, res: Response) => {
  res.send("pong");
};

export { handleRequest };
