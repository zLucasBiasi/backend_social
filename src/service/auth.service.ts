import jwt from "jsonwebtoken";

const secret_key = process.env.SECRET_KEY!;

export class AuthService {
  static async token(data: any) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data,
      },
      secret_key
    );
    return token;
  }
}
