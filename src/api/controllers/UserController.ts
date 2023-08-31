import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Request, Response } from "express";

const secret_key = process.env.SECRET_KEY!;

export const home = (req: Request, res: Response) => {
  res.send({ "mensagem: ": "Api rodando" });
};

export const register = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const encryptedPassword = await bcrypt.hash(payload.password, 10);

    payload.password = encryptedPassword;

    const user = await prisma.user.create({
      data: payload,
    });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: { email: user.email, id: user.id },
      },
      secret_key
    );

    res.status(201).json({ mensagem: "usuario registrado com sucesso", token });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (user && (await bcrypt.compare(payload.password, user.password))) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: { email: user.email, id: user.id },
        },
        secret_key
      );
      res.status(201).json({ "Usuario logado com sucesso": user, token });
    } else {
      res.status(400).send({ mensagem: "email ou senha errados" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(201).json({ mensagem: user });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: any, res: Response) => {
  try {
    const userID = req.user;
    const payload = req.body;
    await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
    });
    res.status(201).json({ mensagem: "usuario editado com sucesso" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteUser = async (req: any, res: Response) => {
  try {
    const userID = req.user;

    await prisma.user.delete({
      where: {
        id: userID,
      },
    });
    res.status(201).json({ mensagem: "usuario deletado com sucesso" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
