import { Request, Response } from "express";
import { createUserDTO } from "../../DTO/createUserDTO";

import bcrypt from "bcrypt";
import { AuthService } from "../auth.service";
import { UserRepository } from "../../repository/user.reposity";
import { EmailAlreadyInUseError } from "./errors";

interface Data {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  age: string;
}
export class User {
  static async register(data: Data) {
    const { email, password, first_name, last_name, age } = data;

    const userAlreadyExist = await UserRepository.findUnicByEmail(email);
    if (userAlreadyExist) throw new EmailAlreadyInUseError();

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await UserRepository.register({
      email,
      password: encryptedPassword,
      first_name,
      last_name,
      age,
    });
    const { password: _, ...props } = user;
    return props;
  }

  static async login(req: Request, res: Response) {
    try {
      const payload = req.body;

      const user = await UserRepository.findUnicByEmail(payload);

      if (user && (await bcrypt.compare(payload.password, user.password))) {
        const token = await AuthService.token({
          email: createUserDTO.email,
          id: user.id,
        });
        res.status(201).json({ token });
      } else {
        res.status(400).send({ mensagem: "email ou senha errados" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateUser(req: any, res: Response) {
    try {
      const userID = req.userID;
      const payload = req.body;

      await UserRepository.updateUser(userID, payload);

      res.status(201).json({ mensagem: "usuario editado com sucesso" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async deleteUser(req: any, res: Response) {
    try {
      const userID = req.userID;
      await UserRepository.deleteUser(userID);
      res.status(201).json({ mensagem: "usuario deletado com sucesso" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
