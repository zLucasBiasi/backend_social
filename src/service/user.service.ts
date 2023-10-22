import { Request, Response } from "express";
import { createUserDTO } from "../DTO/createUserDTO";

import bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import { UserRepository } from "../repository/user.reposity";

export class User {
  static async register(req: Request, res: Response) {
    try {
      const payload = req.body;
      const encryptedPassword = await bcrypt.hash(payload.password, 10);
      payload.password = encryptedPassword;

      const user = await UserRepository.register(payload);

      const token = await AuthService.token({
        email: createUserDTO.email,
        id: user.id,
      });
      res
        .status(201)
        .json({ mensagem: "usuario registrado com sucesso", token });
    } catch (err) {
      res.status(500).json(err);
    }
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
        res.status(201).json({ "Usuario logado com sucesso": token });
      } else {
        res.status(400).send({ mensagem: "email ou senha errados" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateUser(req: any, res: Response) {
    try {
      const userID = req.user;
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
      const userID = req.user;
      await UserRepository.deleteUser(userID);
      res.status(201).json({ mensagem: "usuario deletado com sucesso" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
