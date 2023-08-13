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

    await prisma.user.create({
      data: payload,
    });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: { email: payload.email },
      },
      secret_key
    );

    res
      .status(201)
      .json({ "mensagem:": "usuario registrado com sucesso", token });
  } catch (err) {
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
      res.status(201).json({ "Usuario logado com sucesso": user });
    } else {
      res.status(400).send({ "mensagem:": "email ou senha errados" });
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
    res.status(201).json({ "mensagem:": user });
  } catch (err) {
    res.status(500).json(err);
  }
};
export const updateUser = (req: any, res: any) => {
  // Lógica para atualizar os dados de um usuário e redirecionar para a página de detalhes do usuário
};
export const deleteUser = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(201).json({ "mensagem:": "usuario deletado com sucesso" });
  } catch (err) {
    res.status(500).json(err);
  }
};
