import "dotenv/config";
import { Response, Request } from "express";
import { User } from "../service/user.service";

export class UserController {
  static register(req: Request, res: Response) {
    return User.register(req, res);
  }

  static login(req: Request, res: Response) {
    return User.login(req, res);
  }

  static updateUser(req: Request, res: Response) {
    return User.updateUser(req, res);
  }

  static deleteUser(req: Request, res: Response) {
    return User.deleteUser(req, res);
  }
}
