import { prisma } from "../lib/prisma";

export class UserRepository {
  static async register(payload: any) {
    const user = await prisma.user.create({
      data: payload,
    });
    return user;
  }

  static async findUnicByEmail(payload: any) {
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    return user;
  }

  static async updateUser(userID: any, payload: any) {
    await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
    });
  }

  static async deleteUser(userID: any) {
    await prisma.user.delete({
      where: {
        id: userID,
      },
    });
  }
}
