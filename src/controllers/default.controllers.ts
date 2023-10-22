import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send({ "mensagem: ": "Api rodando" });
};
