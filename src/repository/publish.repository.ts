import { prisma } from "../lib/prisma";

export class publishRepository {
  static async post(payload: any) {
    const post = await prisma.publish.create({
      data: payload,
    });
    return post;
  }
}
