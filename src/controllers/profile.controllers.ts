import { Request, Response } from "express";
import { PublishService } from "../service/publish.service";

export class profileController {
  static publish(req: Request, res: Response) {
    const teste = PublishService.publish(req.body);
    return res.send(201).json(teste);
  }
}
