import { prisma } from "../lib/prisma";

import { Request, Response } from "express";

export const home = (req: any, res: any) => {
  res.send({ "mensagem: ": "Api rodando" });
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    await prisma.user.create({
      data: payload,
    });
    res.status(201).json({ "mensagem:": "usuario criado com sucesso" });
  } catch (err) {
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
export const deleteUser = (req: any, res: any) => {
  // Lógica para excluir um usuário e redirecionar para a página de lista de usuários
};
