import { Response, Request } from "express";
import { User } from "../service/user/user.service";

export class UserController {
  static async register(req: Request, res: Response) {
    const userRegisted = await User.register(req.body);
    return res.status(201).json(userRegisted);
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
