import { Response, Request } from "express";
import { User } from "../service/user/user.service";

export class UserController {
  static async register(req: Request, res: Response) {
    const userRegisted = await User.register(req.body);
    return res.status(201).json({ user: userRegisted });
  }

  static async login(req: Request, res: Response) {
    const userLogged = await User.login(req.body);
    return res.status(200).json({ token: userLogged });
  }

  static async updateUser(req: any, res: Response) {
    const userID = req.userID;
    const userUpdated = await User.update(req.body, userID);
    return res.status(200).json({ user: userUpdated });
  }

  static async deleteUser(req: any, res: Response) {
    const userDeleted = await User.delete(req.userID);
    return res.status(200).json({ user: userDeleted });
  }
}
