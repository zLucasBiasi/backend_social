import { prisma } from "../lib/prisma";

export class UserRepository {
  static async register(payload: any) {
    const user = await prisma.user.create({
      data: payload,
    });
    return user;
  }

  static async findUnicByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  static update(userID: any, payload: any) {
    return prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
      select: {
        first_name: true,
        last_name: true,
      },
    });
  }

  static async delete(userID: any) {
    return await prisma.user.delete({
      where: {
        id: userID,
      },
      select: {
        first_name: true,
        last_name: true,
      },
    });
  }
}
