import { Request, Response } from "express";
import { createUserDTO } from "../../DTO/createUserDTO";

import bcrypt from "bcrypt";
import { AuthService } from "../auth.service";
import { UserRepository } from "../../repository/user.reposity";
import { EmailAlreadyInUseError } from "./errors";
import { Data, Login, Update } from "./types.user";

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

  static async login(data: Login) {
    const { email, password } = data;

    const user = await UserRepository.findUnicByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await AuthService.token({
        email: createUserDTO.email,
        id: user.id,
      });
      return token;
    }
  }

  static async update(data: Update, id: string) {
    const { first_name, last_name } = data;

    const UserEdit = await UserRepository.update(id, {
      first_name,
      last_name,
    });

    return UserEdit;
  }

  static async delete(id: string) {
    const userDeleted = await UserRepository.delete(id);
    return userDeleted;
  }
}
