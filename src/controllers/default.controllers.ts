import { Request, Response } from "express";

export class defaultController {
  static home(req: Request, res: Response) {
    return res.send({ "mensagem: ": "Api rodando" });
  }
}
